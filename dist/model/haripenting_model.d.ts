import { HariPenting } from "../generated/prisma/client";
export type HariPentingResponse = {
    uuid: string;
    date: Date;
    description: string | null;
    is_libur: boolean;
};
export declare function toHariPentingResponse(data: HariPenting): HariPentingResponse;
//# sourceMappingURL=haripenting_model.d.ts.map