import { JadwalPst } from "../generated/prisma/client";
export type JadwalPstResponse = {
    uuid: string;
    start_date: Date;
    end_date: Date;
    pst_petugas_name: string | null;
    pst_petugas_nohp: string | null;
    pst_petugas_photo: string | null;
    mpp1_petugas_name: string | null;
    mpp1_petugas_nohp: string | null;
    mpp1_petugas_photo: string | null;
    mpp2_petugas_name: string | null;
    mpp2_petugas_nohp: string | null;
    mpp2_petugas_photo: string | null;
};
export declare function toJadwalPstResponse(data: JadwalPst): JadwalPstResponse;
//# sourceMappingURL=jadwalpst_model.d.ts.map