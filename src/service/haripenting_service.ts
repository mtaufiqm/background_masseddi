import moment from "moment-timezone"
import { PrismaClient } from "../generated/prisma/client";

export class HariPentingService {
    static async readAllDateByLiburStatus(db: PrismaClient, is_libur: boolean): Promise<string[]>{
        let result = await db.hariPenting.findMany({
            where: {
                is_libur: true
            }
        });
        return result.map((el) => moment(el.date).format("YYYYMMDD"));
    }
}