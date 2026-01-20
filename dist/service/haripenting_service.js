"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HariPentingService = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
class HariPentingService {
    static async readAllDateByLiburStatus(db, is_libur) {
        let result = await db.hariPenting.findMany({
            where: {
                is_libur: true
            }
        });
        return result.map((el) => (0, moment_timezone_1.default)(el.date).format("YYYYMMDD"));
    }
}
exports.HariPentingService = HariPentingService;
//# sourceMappingURL=haripenting_service.js.map