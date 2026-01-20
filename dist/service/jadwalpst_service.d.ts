import { PrismaClient } from "../generated/prisma/client";
import { JadwalPstResponse } from "../model/jadwalpst_model";
export declare class JadwalPstService {
    static getTodayJadwal(db: PrismaClient): Promise<JadwalPstResponse>;
}
//# sourceMappingURL=jadwalpst_service.d.ts.map