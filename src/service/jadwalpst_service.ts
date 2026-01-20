import moment from "moment-timezone";
import { PrismaClient } from "../generated/prisma/client";
import { DateTimeHelper } from "../helper/datetime_helper";
import { JadwalPstResponse, toJadwalPstResponse } from "../model/jadwalpst_model";

export class JadwalPstService {
    static async getTodayJadwal(db: PrismaClient): Promise<JadwalPstResponse> {
        let today = DateTimeHelper.getCurrentLocalTimeObj();
        let todayFormatted = moment().tz(DateTimeHelper.timeZone).toDate();
        console.info(`today data : ${DateTimeHelper.getCurrentLocalTime()}`);
        let result = await db.jadwalPst.findFirst({
            where: {
                start_date: {
                    lte: todayFormatted
                },
                end_date: {
                    gte: todayFormatted
                }
            }
        });
        if(!result){
            throw Error("There is no Data");
        }
        return toJadwalPstResponse(result);
    }
}