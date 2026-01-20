"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const whatsapp_web_js_1 = __importStar(require("whatsapp-web.js"));
const qrcode = __importStar(require("qrcode"));
const dotenv_1 = require("dotenv");
const client_1 = require("../generated/prisma/client");
const prismaAdapter = __importStar(require("@prisma/adapter-pg"));
const pgDriver = __importStar(require("pg"));
const cron_1 = require("cron");
const haripenting_service_1 = require("../service/haripenting_service");
const jadwalpst_service_1 = require("../service/jadwalpst_service");
const datetime_helper_1 = require("../helper/datetime_helper");
(0, dotenv_1.configDotenv)({ override: true, path: ["../../background_masseddi/.env", ".env"] });
const isWindows = (process.platform === "win32") ? true : false;
const adminNumber = "6289685183895";
let isTaskActive = false;
class ManageBackground {
    static async init() {
        try {
            let dbClient = await ManageBackground.initDbClient();
            let waClient = await ManageBackground.setWhatsappClient();
            //add event listener when ready
            waClient.on(`ready`, async () => {
                console.info(`ready to use..`);
                await this.startFirstTaskCronJob(dbClient, waClient);
            });
            waClient.on(`disconnected`, async () => {
                console.info(`Disconnected`);
            });
            await waClient.initialize();
        }
        catch (err) {
            console.info(`Error Occurred When Initialized :\n ${err}`);
        }
    }
    static async startFirstTaskCronJob(dbClient, waClient) {
        console.info("Start First Task Cron Job..");
        let cronTask = new cron_1.CronJob("0 * 8 * * *", async function () {
            try {
                let listHariLibur = await haripenting_service_1.HariPentingService.readAllDateByLiburStatus(dbClient, true);
                //if not thrown means there today jadwal
                let result = await jadwalpst_service_1.JadwalPstService.getTodayJadwal(dbClient);
                console.info(`There is Jadwal ${result.start_date} - ${result.end_date}`);
                let formattedCurrentDate = datetime_helper_1.DateTimeHelper.getCurrentLocalTimeWithFormat("YYYYMMDD");
                //if today is hari_libur, skip notification
                if (listHariLibur.includes(formattedCurrentDate)) {
                    return;
                }
                //if not hari_libur, send message
                //send message to petugas pst;
                let resultSendMessage = {
                    pst: false,
                    mpp1: false,
                    mpp2: false
                };
                if (result.pst_petugas_nohp) {
                    let message = `*PST Reminder*

Halo _*${result.pst_petugas_name}*_, Minggu ini kamu bertugas sebagai petugas Pelayanan Statistik Terpadu *(PST)*!,
Sehat Selalu Ya! 

_Pesan ini merupakan pesan otomatis, tidak untuk dibalas!_
Made With ❤️ BPS Kabupaten Luwu
`;
                    let sendResult = await ManageBackground.sendMessage(waClient, result.pst_petugas_nohp ?? "", message);
                    resultSendMessage.pst = sendResult;
                }
                //send message to petugas mpp1;
                if (result.mpp1_petugas_nohp) {
                    let message = `*MPP Reminder*

Halo _*${result.mpp1_petugas_name}*_, minggu ini kamu dan ${result.mpp2_petugas_name} bertugas sebagai petugas Pelayanan di Mall Pelayanan Publik *(MPP)* Kabupaten Luwu, 
Sehat Selalu Ya! 

_Pesan ini merupakan pesan otomatis, tidak untuk dibalas!_
Made With ❤️ BPS Kabupaten Luwu
`;
                    let sendResult = await ManageBackground.sendMessage(waClient, result.mpp1_petugas_nohp ?? "", message);
                    resultSendMessage.mpp1 = sendResult;
                }
                //send message to petugas mpp2;
                if (result.mpp2_petugas_nohp) {
                    let message = `*MPP Reminder*

Halo _*${result.mpp2_petugas_name}*_, minggu ini kamu dan ${result.mpp1_petugas_name} bertugas sebagai petugas Pelayanan di Mall Pelayanan Publik *(MPP)* Kabupaten Luwu, 
Sehat Selalu Ya! 

_Pesan ini merupakan pesan otomatis, tidak untuk dibalas!_
Made With ❤️ BPS Kabupaten Luwu
`;
                    let sendResult = await ManageBackground.sendMessage(waClient, result.mpp2_petugas_nohp ?? "", message);
                    resultSendMessage.mpp2 = sendResult;
                }
                //send to admin
                let message = `STATUS PENGIRIMAN PST REMINDER
${JSON.stringify(resultSendMessage)}
`;
                let sendResultAdmin = await ManageBackground.sendMessage(waClient, adminNumber, message);
            }
            catch (err) {
                console.info(`Error ${err}`);
            }
        }, null, true, "Asia/Makassar");
    }
    static async initDbClient() {
        console.info(`Init DB Client`);
        const pgAdapter = new prismaAdapter.PrismaPg(new pgDriver.Pool({
            connectionString: process.env.POSTGRESQL_URL
        }));
        const dbClient = new client_1.PrismaClient({
            adapter: pgAdapter
        });
        return dbClient;
    }
    static async setWhatsappClient() {
        //initial whatsapp client
        const whatsappClient = new whatsapp_web_js_1.default.Client({
            authStrategy: new whatsapp_web_js_1.LocalAuth({
                dataPath: isWindows ? "./whatsapp" : "/opt/whatsapp"
            }),
            puppeteer: {
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ],
                headless: true
            }
        });
        whatsappClient.on(`qr`, async (input) => {
            console.info(`============== SCAN QR CODE BELOW ==================`);
            let strQr = await qrcode.toString(input);
            console.info(strQr);
        });
        return whatsappClient;
    }
    static async sendMessage(waClient, phoneNumber, message) {
        try {
            const myNumber = await waClient.getNumberId(phoneNumber);
            if (!myNumber) {
                throw new Error("Number Invalid");
            }
            let result = await waClient.sendMessage(myNumber._serialized, message);
            console.info(`Sukses Mengirim Pesan ke ${phoneNumber}`);
            return true;
        }
        catch (err) {
            console.info(`Gagal Mengirim Pesan ke ${phoneNumber} : ${err}`);
            return false;
        }
    }
}
ManageBackground.init();
//# sourceMappingURL=init.js.map