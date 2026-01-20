import wa, { LocalAuth } from "whatsapp-web.js";
import * as qrcode from "qrcode";
import { configDotenv } from "dotenv";
import { PrismaClient } from "../generated/prisma/client";
import * as prismaAdapter from "@prisma/adapter-pg";
import * as pgDriver from "pg";
import { CronJob } from "cron";
import { HariPentingService } from "../service/haripenting_service";
import { JadwalPstService } from "../service/jadwalpst_service";
import { DateTimeHelper } from "../helper/datetime_helper";


configDotenv({override: true, path:["../../background_masseddi/.env",".env"]});

const isWindows: boolean = (process.platform === "win32")?true:false;
const adminNumber: string = "6289685183895";
let isTaskActive: boolean = false;
class ManageBackground {
    static async init(): Promise<void> {
        try {
            let dbClient = await ManageBackground.initDbClient();
            let waClient = await ManageBackground.setWhatsappClient();
            //add event listener when ready
            waClient.on(`ready`,async (): Promise<void> => {
                console.info(`ready to use..`);
                await this.startFirstTaskCronJob(dbClient,waClient);
            });
            waClient.on(`disconnected`, async (): Promise<void> => {
                console.info(`Disconnected`);
            });
            await waClient.initialize();
        } catch(err){
            console.info(`Error Occurred When Initialized :\n ${err}`);
        }
    }


    static async startFirstTaskCronJob(dbClient: PrismaClient, waClient: wa.Client): Promise<void> {
        console.info("Start First Task Cron Job..");
        let cronTask = new CronJob(
            "0 1 8,9 * * *",
            async function() : Promise<void> {
                try { 
                    let listHariLibur: string[] = await HariPentingService.readAllDateByLiburStatus(dbClient,true);
                    //if not thrown means there today jadwal
                    let result = await JadwalPstService.getTodayJadwal(dbClient);
                    console.info(`There is Jadwal ${result.start_date} - ${result.end_date}`);
                    let formattedCurrentDate = DateTimeHelper.getCurrentLocalTimeWithFormat("YYYYMMDD");
                    //if today is hari_libur, skip notification
                    if(listHariLibur.includes(formattedCurrentDate)){
                        return;
                    }
                    //if not hari_libur, send message
                    //send message to petugas pst;
                    let resultSendMessage: {pst:boolean; mpp1: boolean; mpp2: boolean} = {
                        pst: false,
                        mpp1: false,
                        mpp2: false
                    };
                    if(result.pst_petugas_nohp){
                        let message: string = `*PST Reminder*

Halo _*${result.pst_petugas_name}*_, Minggu ini kamu bertugas sebagai petugas Pelayanan Statistik Terpadu *(PST)*!,
Sehat Selalu Ya! 

_Pesan ini merupakan pesan otomatis, tidak untuk dibalas!_
Made With ❤️ BPS Kabupaten Luwu
`;
                        let sendResult = await ManageBackground.sendMessage(waClient, result.pst_petugas_nohp??"", message);
                        resultSendMessage.pst = sendResult;
                    }

                    //send message to petugas mpp1;
                    if(result.mpp1_petugas_nohp){
                        let message: string = `*MPP Reminder*

Halo _*${result.mpp1_petugas_name}*_, minggu ini kamu dan ${result.mpp2_petugas_name} bertugas sebagai petugas Pelayanan di Mall Pelayanan Publik *(MPP)* Kabupaten Luwu, 
Sehat Selalu Ya! 

_Pesan ini merupakan pesan otomatis, tidak untuk dibalas!_
Made With ❤️ BPS Kabupaten Luwu
`;
                        let sendResult = await ManageBackground.sendMessage(waClient, result.mpp1_petugas_nohp??"", message);
                        resultSendMessage.mpp1 = sendResult;
                    }

                    
                    //send message to petugas mpp2;
                    if(result.mpp2_petugas_nohp){
                        let message: string = `*MPP Reminder*

Halo _*${result.mpp2_petugas_name}*_, minggu ini kamu dan ${result.mpp1_petugas_name} bertugas sebagai petugas Pelayanan di Mall Pelayanan Publik *(MPP)* Kabupaten Luwu, 
Sehat Selalu Ya! 

_Pesan ini merupakan pesan otomatis, tidak untuk dibalas!_
Made With ❤️ BPS Kabupaten Luwu
`;
                        let sendResult = await ManageBackground.sendMessage(waClient, result.mpp2_petugas_nohp??"", message);
                        resultSendMessage.mpp2 = sendResult;
                    }

                    //send to admin
                    let message: string = `STATUS PENGIRIMAN PST REMINDER
${JSON.stringify(resultSendMessage)}
`;
                    let sendResultAdmin: boolean = await ManageBackground.sendMessage(waClient, adminNumber, message);
                } catch(err){
                    console.info(`Error ${err}`);
                }
            },
            null,
            true,
            "Asia/Makassar"
        );
    }

    static async initDbClient(): Promise<PrismaClient>{
        console.info(`Init DB Client`);
        const pgAdapter = new prismaAdapter.PrismaPg(new pgDriver.Pool({
            connectionString: process.env.POSTGRESQL_URL!
        }
        ));
        const dbClient = new PrismaClient({
            adapter: pgAdapter
        });
        return dbClient;
    }

    static async setWhatsappClient(): Promise<wa.Client>{
        //initial whatsapp client
        const whatsappClient = new wa.Client({
            authStrategy: new LocalAuth({
                dataPath: isWindows?"./whatsapp":"/opt/whatsapp"
            }),
            puppeteer: {
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ],
                headless: true
            }
        });

        whatsappClient.on(`qr`, async (input: string): Promise<void> => {
            console.info(`============== SCAN QR CODE BELOW ==================`);
            let strQr = await qrcode.toString(input);
            console.info(strQr);
        });
        return whatsappClient;
    }

    static async sendMessage(waClient: wa.Client, phoneNumber: string, message: string): Promise<boolean> {
        try {
            const myNumber = await waClient.getNumberId(phoneNumber);
            if(!myNumber){
                throw new Error("Number Invalid");
            }
            let result = await waClient.sendMessage(myNumber._serialized, message, {sendSeen : false}); 
            console.info(`Sukses Mengirim Pesan ke ${phoneNumber}`);
            return true;
        } catch(err){
            console.info(`Gagal Mengirim Pesan ke ${phoneNumber} : ${err}`);
            return false;
        }
    }
}

ManageBackground.init();