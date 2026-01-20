import { HariPenting } from "../generated/prisma/client";

export type HariPentingResponse = {
    uuid: string;
    date: Date;
    description: string | null;
    is_libur: boolean;
}

export function toHariPentingResponse(data: HariPenting): HariPentingResponse {
    return data as HariPentingResponse;
}