"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JadwalPstService = void 0;
const datetime_helper_1 = require("../helper/datetime_helper");
const jadwalpst_model_1 = require("../model/jadwalpst_model");
class JadwalPstService {
    static async getTodayJadwal(db) {
        let today = new Date();
        console.info(`today data : ${datetime_helper_1.DateTimeHelper.getCurrentLocalTime()}`);
        let result = await db.jadwalPst.findFirst({
            where: {
                start_date: {
                    lte: today
                },
                end_date: {
                    gte: today
                }
            }
        });
        if (!result) {
            throw Error("There is no Data");
        }
        return (0, jadwalpst_model_1.toJadwalPstResponse)(result);
    }
}
exports.JadwalPstService = JadwalPstService;
//# sourceMappingURL=jadwalpst_service.js.map