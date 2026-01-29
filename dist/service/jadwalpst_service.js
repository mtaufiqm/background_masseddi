"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JadwalPstService = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const datetime_helper_1 = require("../helper/datetime_helper");
const jadwalpst_model_1 = require("../model/jadwalpst_model");
class JadwalPstService {
    static async getTodayJadwal(db) {
        let today = datetime_helper_1.DateTimeHelper.getCurrentLocalTimeObj();
        let todayFormatted = (0, moment_timezone_1.default)().tz(datetime_helper_1.DateTimeHelper.timeZone).toDate();
        console.info(`today data : ${datetime_helper_1.DateTimeHelper.getCurrentLocalTime()}`);
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
        if (!result) {
            throw Error("There is no Data");
        }
        return (0, jadwalpst_model_1.toJadwalPstResponse)(result);
    }
}
exports.JadwalPstService = JadwalPstService;
//# sourceMappingURL=jadwalpst_service.js.map