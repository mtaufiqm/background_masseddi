import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Kegiatan
 *
 */
export type KegiatanModel = runtime.Types.Result.DefaultSelection<Prisma.$KegiatanPayload>;
export type AggregateKegiatan = {
    _count: KegiatanCountAggregateOutputType | null;
    _avg: KegiatanAvgAggregateOutputType | null;
    _sum: KegiatanSumAggregateOutputType | null;
    _min: KegiatanMinAggregateOutputType | null;
    _max: KegiatanMaxAggregateOutputType | null;
};
export type KegiatanAvgAggregateOutputType = {
    organic_number: number | null;
    mitra_number: number | null;
    status: number | null;
};
export type KegiatanSumAggregateOutputType = {
    organic_number: number | null;
    mitra_number: number | null;
    status: number | null;
};
export type KegiatanMinAggregateOutputType = {
    uuid: string | null;
    name: string | null;
    description: string | null;
    start: string | null;
    end: string | null;
    monitoring_link: string | null;
    organic_involved: boolean | null;
    organic_number: number | null;
    mitra_involved: boolean | null;
    mitra_number: number | null;
    created_by: string | null;
    penanggung_jawab: string | null;
    mode: string | null;
    status: number | null;
};
export type KegiatanMaxAggregateOutputType = {
    uuid: string | null;
    name: string | null;
    description: string | null;
    start: string | null;
    end: string | null;
    monitoring_link: string | null;
    organic_involved: boolean | null;
    organic_number: number | null;
    mitra_involved: boolean | null;
    mitra_number: number | null;
    created_by: string | null;
    penanggung_jawab: string | null;
    mode: string | null;
    status: number | null;
};
export type KegiatanCountAggregateOutputType = {
    uuid: number;
    name: number;
    description: number;
    start: number;
    end: number;
    monitoring_link: number;
    organic_involved: number;
    organic_number: number;
    mitra_involved: number;
    mitra_number: number;
    created_by: number;
    penanggung_jawab: number;
    mode: number;
    status: number;
    _all: number;
};
export type KegiatanAvgAggregateInputType = {
    organic_number?: true;
    mitra_number?: true;
    status?: true;
};
export type KegiatanSumAggregateInputType = {
    organic_number?: true;
    mitra_number?: true;
    status?: true;
};
export type KegiatanMinAggregateInputType = {
    uuid?: true;
    name?: true;
    description?: true;
    start?: true;
    end?: true;
    monitoring_link?: true;
    organic_involved?: true;
    organic_number?: true;
    mitra_involved?: true;
    mitra_number?: true;
    created_by?: true;
    penanggung_jawab?: true;
    mode?: true;
    status?: true;
};
export type KegiatanMaxAggregateInputType = {
    uuid?: true;
    name?: true;
    description?: true;
    start?: true;
    end?: true;
    monitoring_link?: true;
    organic_involved?: true;
    organic_number?: true;
    mitra_involved?: true;
    mitra_number?: true;
    created_by?: true;
    penanggung_jawab?: true;
    mode?: true;
    status?: true;
};
export type KegiatanCountAggregateInputType = {
    uuid?: true;
    name?: true;
    description?: true;
    start?: true;
    end?: true;
    monitoring_link?: true;
    organic_involved?: true;
    organic_number?: true;
    mitra_involved?: true;
    mitra_number?: true;
    created_by?: true;
    penanggung_jawab?: true;
    mode?: true;
    status?: true;
    _all?: true;
};
export type KegiatanAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Kegiatan to aggregate.
     */
    where?: Prisma.KegiatanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Kegiatans to fetch.
     */
    orderBy?: Prisma.KegiatanOrderByWithRelationInput | Prisma.KegiatanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.KegiatanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Kegiatans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Kegiatans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Kegiatans
    **/
    _count?: true | KegiatanCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: KegiatanAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: KegiatanSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: KegiatanMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: KegiatanMaxAggregateInputType;
};
export type GetKegiatanAggregateType<T extends KegiatanAggregateArgs> = {
    [P in keyof T & keyof AggregateKegiatan]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKegiatan[P]> : Prisma.GetScalarType<T[P], AggregateKegiatan[P]>;
};
export type KegiatanGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KegiatanWhereInput;
    orderBy?: Prisma.KegiatanOrderByWithAggregationInput | Prisma.KegiatanOrderByWithAggregationInput[];
    by: Prisma.KegiatanScalarFieldEnum[] | Prisma.KegiatanScalarFieldEnum;
    having?: Prisma.KegiatanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KegiatanCountAggregateInputType | true;
    _avg?: KegiatanAvgAggregateInputType;
    _sum?: KegiatanSumAggregateInputType;
    _min?: KegiatanMinAggregateInputType;
    _max?: KegiatanMaxAggregateInputType;
};
export type KegiatanGroupByOutputType = {
    uuid: string;
    name: string;
    description: string | null;
    start: string | null;
    end: string | null;
    monitoring_link: string | null;
    organic_involved: boolean | null;
    organic_number: number | null;
    mitra_involved: boolean | null;
    mitra_number: number | null;
    created_by: string | null;
    penanggung_jawab: string | null;
    mode: string | null;
    status: number;
    _count: KegiatanCountAggregateOutputType | null;
    _avg: KegiatanAvgAggregateOutputType | null;
    _sum: KegiatanSumAggregateOutputType | null;
    _min: KegiatanMinAggregateOutputType | null;
    _max: KegiatanMaxAggregateOutputType | null;
};
type GetKegiatanGroupByPayload<T extends KegiatanGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KegiatanGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KegiatanGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KegiatanGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KegiatanGroupByOutputType[P]>;
}>>;
export type KegiatanWhereInput = {
    AND?: Prisma.KegiatanWhereInput | Prisma.KegiatanWhereInput[];
    OR?: Prisma.KegiatanWhereInput[];
    NOT?: Prisma.KegiatanWhereInput | Prisma.KegiatanWhereInput[];
    uuid?: Prisma.StringFilter<"Kegiatan"> | string;
    name?: Prisma.StringFilter<"Kegiatan"> | string;
    description?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    start?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    end?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    monitoring_link?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    organic_involved?: Prisma.BoolNullableFilter<"Kegiatan"> | boolean | null;
    organic_number?: Prisma.IntNullableFilter<"Kegiatan"> | number | null;
    mitra_involved?: Prisma.BoolNullableFilter<"Kegiatan"> | boolean | null;
    mitra_number?: Prisma.IntNullableFilter<"Kegiatan"> | number | null;
    created_by?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    penanggung_jawab?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    mode?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    status?: Prisma.IntFilter<"Kegiatan"> | number;
    createdByObj?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    pjObj?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    modeObj?: Prisma.XOR<Prisma.KegiatanModeNullableScalarRelationFilter, Prisma.KegiatanModeWhereInput> | null;
    statusObj?: Prisma.XOR<Prisma.KegiatanStatusScalarRelationFilter, Prisma.KegiatanStatusWhereInput>;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeListRelationFilter;
};
export type KegiatanOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    start?: Prisma.SortOrderInput | Prisma.SortOrder;
    end?: Prisma.SortOrderInput | Prisma.SortOrder;
    monitoring_link?: Prisma.SortOrderInput | Prisma.SortOrder;
    organic_involved?: Prisma.SortOrderInput | Prisma.SortOrder;
    organic_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    mitra_involved?: Prisma.SortOrderInput | Prisma.SortOrder;
    mitra_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    penanggung_jawab?: Prisma.SortOrderInput | Prisma.SortOrder;
    mode?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByObj?: Prisma.UserOrderByWithRelationInput;
    pjObj?: Prisma.UserOrderByWithRelationInput;
    modeObj?: Prisma.KegiatanModeOrderByWithRelationInput;
    statusObj?: Prisma.KegiatanStatusOrderByWithRelationInput;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeOrderByRelationAggregateInput;
};
export type KegiatanWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    AND?: Prisma.KegiatanWhereInput | Prisma.KegiatanWhereInput[];
    OR?: Prisma.KegiatanWhereInput[];
    NOT?: Prisma.KegiatanWhereInput | Prisma.KegiatanWhereInput[];
    name?: Prisma.StringFilter<"Kegiatan"> | string;
    description?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    start?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    end?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    monitoring_link?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    organic_involved?: Prisma.BoolNullableFilter<"Kegiatan"> | boolean | null;
    organic_number?: Prisma.IntNullableFilter<"Kegiatan"> | number | null;
    mitra_involved?: Prisma.BoolNullableFilter<"Kegiatan"> | boolean | null;
    mitra_number?: Prisma.IntNullableFilter<"Kegiatan"> | number | null;
    created_by?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    penanggung_jawab?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    mode?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    status?: Prisma.IntFilter<"Kegiatan"> | number;
    createdByObj?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    pjObj?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    modeObj?: Prisma.XOR<Prisma.KegiatanModeNullableScalarRelationFilter, Prisma.KegiatanModeWhereInput> | null;
    statusObj?: Prisma.XOR<Prisma.KegiatanStatusScalarRelationFilter, Prisma.KegiatanStatusWhereInput>;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeListRelationFilter;
}, "uuid">;
export type KegiatanOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    start?: Prisma.SortOrderInput | Prisma.SortOrder;
    end?: Prisma.SortOrderInput | Prisma.SortOrder;
    monitoring_link?: Prisma.SortOrderInput | Prisma.SortOrder;
    organic_involved?: Prisma.SortOrderInput | Prisma.SortOrder;
    organic_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    mitra_involved?: Prisma.SortOrderInput | Prisma.SortOrder;
    mitra_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    penanggung_jawab?: Prisma.SortOrderInput | Prisma.SortOrder;
    mode?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.KegiatanCountOrderByAggregateInput;
    _avg?: Prisma.KegiatanAvgOrderByAggregateInput;
    _max?: Prisma.KegiatanMaxOrderByAggregateInput;
    _min?: Prisma.KegiatanMinOrderByAggregateInput;
    _sum?: Prisma.KegiatanSumOrderByAggregateInput;
};
export type KegiatanScalarWhereWithAggregatesInput = {
    AND?: Prisma.KegiatanScalarWhereWithAggregatesInput | Prisma.KegiatanScalarWhereWithAggregatesInput[];
    OR?: Prisma.KegiatanScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KegiatanScalarWhereWithAggregatesInput | Prisma.KegiatanScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"Kegiatan"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Kegiatan"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Kegiatan"> | string | null;
    start?: Prisma.StringNullableWithAggregatesFilter<"Kegiatan"> | string | null;
    end?: Prisma.StringNullableWithAggregatesFilter<"Kegiatan"> | string | null;
    monitoring_link?: Prisma.StringNullableWithAggregatesFilter<"Kegiatan"> | string | null;
    organic_involved?: Prisma.BoolNullableWithAggregatesFilter<"Kegiatan"> | boolean | null;
    organic_number?: Prisma.IntNullableWithAggregatesFilter<"Kegiatan"> | number | null;
    mitra_involved?: Prisma.BoolNullableWithAggregatesFilter<"Kegiatan"> | boolean | null;
    mitra_number?: Prisma.IntNullableWithAggregatesFilter<"Kegiatan"> | number | null;
    created_by?: Prisma.StringNullableWithAggregatesFilter<"Kegiatan"> | string | null;
    penanggung_jawab?: Prisma.StringNullableWithAggregatesFilter<"Kegiatan"> | string | null;
    mode?: Prisma.StringNullableWithAggregatesFilter<"Kegiatan"> | string | null;
    status?: Prisma.IntWithAggregatesFilter<"Kegiatan"> | number;
};
export type KegiatanCreateInput = {
    uuid?: string;
    name: string;
    description?: string | null;
    start?: string | null;
    end?: string | null;
    monitoring_link?: string | null;
    organic_involved?: boolean | null;
    organic_number?: number | null;
    mitra_involved?: boolean | null;
    mitra_number?: number | null;
    createdByObj?: Prisma.UserCreateNestedOneWithoutKegiatanCreatorObjInput;
    pjObj?: Prisma.UserCreateNestedOneWithoutKegiatanPjObjInput;
    modeObj?: Prisma.KegiatanModeCreateNestedOneWithoutKegiatanObjInput;
    statusObj?: Prisma.KegiatanStatusCreateNestedOneWithoutKegiatanObjInput;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeCreateNestedManyWithoutKegiatanObjInput;
};
export type KegiatanUncheckedCreateInput = {
    uuid?: string;
    name: string;
    description?: string | null;
    start?: string | null;
    end?: string | null;
    monitoring_link?: string | null;
    organic_involved?: boolean | null;
    organic_number?: number | null;
    mitra_involved?: boolean | null;
    mitra_number?: number | null;
    created_by?: string | null;
    penanggung_jawab?: string | null;
    mode?: string | null;
    status?: number;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeUncheckedCreateNestedManyWithoutKegiatanObjInput;
};
export type KegiatanUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdByObj?: Prisma.UserUpdateOneWithoutKegiatanCreatorObjNestedInput;
    pjObj?: Prisma.UserUpdateOneWithoutKegiatanPjObjNestedInput;
    modeObj?: Prisma.KegiatanModeUpdateOneWithoutKegiatanObjNestedInput;
    statusObj?: Prisma.KegiatanStatusUpdateOneRequiredWithoutKegiatanObjNestedInput;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeUpdateManyWithoutKegiatanObjNestedInput;
};
export type KegiatanUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    penanggung_jawab?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeUncheckedUpdateManyWithoutKegiatanObjNestedInput;
};
export type KegiatanCreateManyInput = {
    uuid?: string;
    name: string;
    description?: string | null;
    start?: string | null;
    end?: string | null;
    monitoring_link?: string | null;
    organic_involved?: boolean | null;
    organic_number?: number | null;
    mitra_involved?: boolean | null;
    mitra_number?: number | null;
    created_by?: string | null;
    penanggung_jawab?: string | null;
    mode?: string | null;
    status?: number;
};
export type KegiatanUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type KegiatanUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    penanggung_jawab?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type KegiatanListRelationFilter = {
    every?: Prisma.KegiatanWhereInput;
    some?: Prisma.KegiatanWhereInput;
    none?: Prisma.KegiatanWhereInput;
};
export type KegiatanOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type KegiatanCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    start?: Prisma.SortOrder;
    end?: Prisma.SortOrder;
    monitoring_link?: Prisma.SortOrder;
    organic_involved?: Prisma.SortOrder;
    organic_number?: Prisma.SortOrder;
    mitra_involved?: Prisma.SortOrder;
    mitra_number?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    penanggung_jawab?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type KegiatanAvgOrderByAggregateInput = {
    organic_number?: Prisma.SortOrder;
    mitra_number?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type KegiatanMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    start?: Prisma.SortOrder;
    end?: Prisma.SortOrder;
    monitoring_link?: Prisma.SortOrder;
    organic_involved?: Prisma.SortOrder;
    organic_number?: Prisma.SortOrder;
    mitra_involved?: Prisma.SortOrder;
    mitra_number?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    penanggung_jawab?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type KegiatanMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    start?: Prisma.SortOrder;
    end?: Prisma.SortOrder;
    monitoring_link?: Prisma.SortOrder;
    organic_involved?: Prisma.SortOrder;
    organic_number?: Prisma.SortOrder;
    mitra_involved?: Prisma.SortOrder;
    mitra_number?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    penanggung_jawab?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type KegiatanSumOrderByAggregateInput = {
    organic_number?: Prisma.SortOrder;
    mitra_number?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type KegiatanScalarRelationFilter = {
    is?: Prisma.KegiatanWhereInput;
    isNot?: Prisma.KegiatanWhereInput;
};
export type KegiatanCreateNestedManyWithoutCreatedByObjInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutCreatedByObjInput, Prisma.KegiatanUncheckedCreateWithoutCreatedByObjInput> | Prisma.KegiatanCreateWithoutCreatedByObjInput[] | Prisma.KegiatanUncheckedCreateWithoutCreatedByObjInput[];
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutCreatedByObjInput | Prisma.KegiatanCreateOrConnectWithoutCreatedByObjInput[];
    createMany?: Prisma.KegiatanCreateManyCreatedByObjInputEnvelope;
    connect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
};
export type KegiatanCreateNestedManyWithoutPjObjInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutPjObjInput, Prisma.KegiatanUncheckedCreateWithoutPjObjInput> | Prisma.KegiatanCreateWithoutPjObjInput[] | Prisma.KegiatanUncheckedCreateWithoutPjObjInput[];
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutPjObjInput | Prisma.KegiatanCreateOrConnectWithoutPjObjInput[];
    createMany?: Prisma.KegiatanCreateManyPjObjInputEnvelope;
    connect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
};
export type KegiatanUncheckedCreateNestedManyWithoutCreatedByObjInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutCreatedByObjInput, Prisma.KegiatanUncheckedCreateWithoutCreatedByObjInput> | Prisma.KegiatanCreateWithoutCreatedByObjInput[] | Prisma.KegiatanUncheckedCreateWithoutCreatedByObjInput[];
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutCreatedByObjInput | Prisma.KegiatanCreateOrConnectWithoutCreatedByObjInput[];
    createMany?: Prisma.KegiatanCreateManyCreatedByObjInputEnvelope;
    connect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
};
export type KegiatanUncheckedCreateNestedManyWithoutPjObjInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutPjObjInput, Prisma.KegiatanUncheckedCreateWithoutPjObjInput> | Prisma.KegiatanCreateWithoutPjObjInput[] | Prisma.KegiatanUncheckedCreateWithoutPjObjInput[];
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutPjObjInput | Prisma.KegiatanCreateOrConnectWithoutPjObjInput[];
    createMany?: Prisma.KegiatanCreateManyPjObjInputEnvelope;
    connect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
};
export type KegiatanUpdateManyWithoutCreatedByObjNestedInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutCreatedByObjInput, Prisma.KegiatanUncheckedCreateWithoutCreatedByObjInput> | Prisma.KegiatanCreateWithoutCreatedByObjInput[] | Prisma.KegiatanUncheckedCreateWithoutCreatedByObjInput[];
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutCreatedByObjInput | Prisma.KegiatanCreateOrConnectWithoutCreatedByObjInput[];
    upsert?: Prisma.KegiatanUpsertWithWhereUniqueWithoutCreatedByObjInput | Prisma.KegiatanUpsertWithWhereUniqueWithoutCreatedByObjInput[];
    createMany?: Prisma.KegiatanCreateManyCreatedByObjInputEnvelope;
    set?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    disconnect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    delete?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    connect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    update?: Prisma.KegiatanUpdateWithWhereUniqueWithoutCreatedByObjInput | Prisma.KegiatanUpdateWithWhereUniqueWithoutCreatedByObjInput[];
    updateMany?: Prisma.KegiatanUpdateManyWithWhereWithoutCreatedByObjInput | Prisma.KegiatanUpdateManyWithWhereWithoutCreatedByObjInput[];
    deleteMany?: Prisma.KegiatanScalarWhereInput | Prisma.KegiatanScalarWhereInput[];
};
export type KegiatanUpdateManyWithoutPjObjNestedInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutPjObjInput, Prisma.KegiatanUncheckedCreateWithoutPjObjInput> | Prisma.KegiatanCreateWithoutPjObjInput[] | Prisma.KegiatanUncheckedCreateWithoutPjObjInput[];
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutPjObjInput | Prisma.KegiatanCreateOrConnectWithoutPjObjInput[];
    upsert?: Prisma.KegiatanUpsertWithWhereUniqueWithoutPjObjInput | Prisma.KegiatanUpsertWithWhereUniqueWithoutPjObjInput[];
    createMany?: Prisma.KegiatanCreateManyPjObjInputEnvelope;
    set?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    disconnect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    delete?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    connect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    update?: Prisma.KegiatanUpdateWithWhereUniqueWithoutPjObjInput | Prisma.KegiatanUpdateWithWhereUniqueWithoutPjObjInput[];
    updateMany?: Prisma.KegiatanUpdateManyWithWhereWithoutPjObjInput | Prisma.KegiatanUpdateManyWithWhereWithoutPjObjInput[];
    deleteMany?: Prisma.KegiatanScalarWhereInput | Prisma.KegiatanScalarWhereInput[];
};
export type KegiatanUncheckedUpdateManyWithoutCreatedByObjNestedInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutCreatedByObjInput, Prisma.KegiatanUncheckedCreateWithoutCreatedByObjInput> | Prisma.KegiatanCreateWithoutCreatedByObjInput[] | Prisma.KegiatanUncheckedCreateWithoutCreatedByObjInput[];
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutCreatedByObjInput | Prisma.KegiatanCreateOrConnectWithoutCreatedByObjInput[];
    upsert?: Prisma.KegiatanUpsertWithWhereUniqueWithoutCreatedByObjInput | Prisma.KegiatanUpsertWithWhereUniqueWithoutCreatedByObjInput[];
    createMany?: Prisma.KegiatanCreateManyCreatedByObjInputEnvelope;
    set?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    disconnect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    delete?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    connect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    update?: Prisma.KegiatanUpdateWithWhereUniqueWithoutCreatedByObjInput | Prisma.KegiatanUpdateWithWhereUniqueWithoutCreatedByObjInput[];
    updateMany?: Prisma.KegiatanUpdateManyWithWhereWithoutCreatedByObjInput | Prisma.KegiatanUpdateManyWithWhereWithoutCreatedByObjInput[];
    deleteMany?: Prisma.KegiatanScalarWhereInput | Prisma.KegiatanScalarWhereInput[];
};
export type KegiatanUncheckedUpdateManyWithoutPjObjNestedInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutPjObjInput, Prisma.KegiatanUncheckedCreateWithoutPjObjInput> | Prisma.KegiatanCreateWithoutPjObjInput[] | Prisma.KegiatanUncheckedCreateWithoutPjObjInput[];
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutPjObjInput | Prisma.KegiatanCreateOrConnectWithoutPjObjInput[];
    upsert?: Prisma.KegiatanUpsertWithWhereUniqueWithoutPjObjInput | Prisma.KegiatanUpsertWithWhereUniqueWithoutPjObjInput[];
    createMany?: Prisma.KegiatanCreateManyPjObjInputEnvelope;
    set?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    disconnect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    delete?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    connect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    update?: Prisma.KegiatanUpdateWithWhereUniqueWithoutPjObjInput | Prisma.KegiatanUpdateWithWhereUniqueWithoutPjObjInput[];
    updateMany?: Prisma.KegiatanUpdateManyWithWhereWithoutPjObjInput | Prisma.KegiatanUpdateManyWithWhereWithoutPjObjInput[];
    deleteMany?: Prisma.KegiatanScalarWhereInput | Prisma.KegiatanScalarWhereInput[];
};
export type KegiatanCreateNestedManyWithoutModeObjInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutModeObjInput, Prisma.KegiatanUncheckedCreateWithoutModeObjInput> | Prisma.KegiatanCreateWithoutModeObjInput[] | Prisma.KegiatanUncheckedCreateWithoutModeObjInput[];
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutModeObjInput | Prisma.KegiatanCreateOrConnectWithoutModeObjInput[];
    createMany?: Prisma.KegiatanCreateManyModeObjInputEnvelope;
    connect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
};
export type KegiatanUncheckedCreateNestedManyWithoutModeObjInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutModeObjInput, Prisma.KegiatanUncheckedCreateWithoutModeObjInput> | Prisma.KegiatanCreateWithoutModeObjInput[] | Prisma.KegiatanUncheckedCreateWithoutModeObjInput[];
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutModeObjInput | Prisma.KegiatanCreateOrConnectWithoutModeObjInput[];
    createMany?: Prisma.KegiatanCreateManyModeObjInputEnvelope;
    connect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
};
export type KegiatanUpdateManyWithoutModeObjNestedInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutModeObjInput, Prisma.KegiatanUncheckedCreateWithoutModeObjInput> | Prisma.KegiatanCreateWithoutModeObjInput[] | Prisma.KegiatanUncheckedCreateWithoutModeObjInput[];
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutModeObjInput | Prisma.KegiatanCreateOrConnectWithoutModeObjInput[];
    upsert?: Prisma.KegiatanUpsertWithWhereUniqueWithoutModeObjInput | Prisma.KegiatanUpsertWithWhereUniqueWithoutModeObjInput[];
    createMany?: Prisma.KegiatanCreateManyModeObjInputEnvelope;
    set?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    disconnect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    delete?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    connect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    update?: Prisma.KegiatanUpdateWithWhereUniqueWithoutModeObjInput | Prisma.KegiatanUpdateWithWhereUniqueWithoutModeObjInput[];
    updateMany?: Prisma.KegiatanUpdateManyWithWhereWithoutModeObjInput | Prisma.KegiatanUpdateManyWithWhereWithoutModeObjInput[];
    deleteMany?: Prisma.KegiatanScalarWhereInput | Prisma.KegiatanScalarWhereInput[];
};
export type KegiatanUncheckedUpdateManyWithoutModeObjNestedInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutModeObjInput, Prisma.KegiatanUncheckedCreateWithoutModeObjInput> | Prisma.KegiatanCreateWithoutModeObjInput[] | Prisma.KegiatanUncheckedCreateWithoutModeObjInput[];
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutModeObjInput | Prisma.KegiatanCreateOrConnectWithoutModeObjInput[];
    upsert?: Prisma.KegiatanUpsertWithWhereUniqueWithoutModeObjInput | Prisma.KegiatanUpsertWithWhereUniqueWithoutModeObjInput[];
    createMany?: Prisma.KegiatanCreateManyModeObjInputEnvelope;
    set?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    disconnect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    delete?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    connect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    update?: Prisma.KegiatanUpdateWithWhereUniqueWithoutModeObjInput | Prisma.KegiatanUpdateWithWhereUniqueWithoutModeObjInput[];
    updateMany?: Prisma.KegiatanUpdateManyWithWhereWithoutModeObjInput | Prisma.KegiatanUpdateManyWithWhereWithoutModeObjInput[];
    deleteMany?: Prisma.KegiatanScalarWhereInput | Prisma.KegiatanScalarWhereInput[];
};
export type KegiatanCreateNestedManyWithoutStatusObjInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutStatusObjInput, Prisma.KegiatanUncheckedCreateWithoutStatusObjInput> | Prisma.KegiatanCreateWithoutStatusObjInput[] | Prisma.KegiatanUncheckedCreateWithoutStatusObjInput[];
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutStatusObjInput | Prisma.KegiatanCreateOrConnectWithoutStatusObjInput[];
    createMany?: Prisma.KegiatanCreateManyStatusObjInputEnvelope;
    connect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
};
export type KegiatanUncheckedCreateNestedManyWithoutStatusObjInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutStatusObjInput, Prisma.KegiatanUncheckedCreateWithoutStatusObjInput> | Prisma.KegiatanCreateWithoutStatusObjInput[] | Prisma.KegiatanUncheckedCreateWithoutStatusObjInput[];
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutStatusObjInput | Prisma.KegiatanCreateOrConnectWithoutStatusObjInput[];
    createMany?: Prisma.KegiatanCreateManyStatusObjInputEnvelope;
    connect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
};
export type KegiatanUpdateManyWithoutStatusObjNestedInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutStatusObjInput, Prisma.KegiatanUncheckedCreateWithoutStatusObjInput> | Prisma.KegiatanCreateWithoutStatusObjInput[] | Prisma.KegiatanUncheckedCreateWithoutStatusObjInput[];
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutStatusObjInput | Prisma.KegiatanCreateOrConnectWithoutStatusObjInput[];
    upsert?: Prisma.KegiatanUpsertWithWhereUniqueWithoutStatusObjInput | Prisma.KegiatanUpsertWithWhereUniqueWithoutStatusObjInput[];
    createMany?: Prisma.KegiatanCreateManyStatusObjInputEnvelope;
    set?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    disconnect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    delete?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    connect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    update?: Prisma.KegiatanUpdateWithWhereUniqueWithoutStatusObjInput | Prisma.KegiatanUpdateWithWhereUniqueWithoutStatusObjInput[];
    updateMany?: Prisma.KegiatanUpdateManyWithWhereWithoutStatusObjInput | Prisma.KegiatanUpdateManyWithWhereWithoutStatusObjInput[];
    deleteMany?: Prisma.KegiatanScalarWhereInput | Prisma.KegiatanScalarWhereInput[];
};
export type KegiatanUncheckedUpdateManyWithoutStatusObjNestedInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutStatusObjInput, Prisma.KegiatanUncheckedCreateWithoutStatusObjInput> | Prisma.KegiatanCreateWithoutStatusObjInput[] | Prisma.KegiatanUncheckedCreateWithoutStatusObjInput[];
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutStatusObjInput | Prisma.KegiatanCreateOrConnectWithoutStatusObjInput[];
    upsert?: Prisma.KegiatanUpsertWithWhereUniqueWithoutStatusObjInput | Prisma.KegiatanUpsertWithWhereUniqueWithoutStatusObjInput[];
    createMany?: Prisma.KegiatanCreateManyStatusObjInputEnvelope;
    set?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    disconnect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    delete?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    connect?: Prisma.KegiatanWhereUniqueInput | Prisma.KegiatanWhereUniqueInput[];
    update?: Prisma.KegiatanUpdateWithWhereUniqueWithoutStatusObjInput | Prisma.KegiatanUpdateWithWhereUniqueWithoutStatusObjInput[];
    updateMany?: Prisma.KegiatanUpdateManyWithWhereWithoutStatusObjInput | Prisma.KegiatanUpdateManyWithWhereWithoutStatusObjInput[];
    deleteMany?: Prisma.KegiatanScalarWhereInput | Prisma.KegiatanScalarWhereInput[];
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type KegiatanCreateNestedOneWithoutKegiatanMitraObjInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutKegiatanMitraObjInput, Prisma.KegiatanUncheckedCreateWithoutKegiatanMitraObjInput>;
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutKegiatanMitraObjInput;
    connect?: Prisma.KegiatanWhereUniqueInput;
};
export type KegiatanUpdateOneRequiredWithoutKegiatanMitraObjNestedInput = {
    create?: Prisma.XOR<Prisma.KegiatanCreateWithoutKegiatanMitraObjInput, Prisma.KegiatanUncheckedCreateWithoutKegiatanMitraObjInput>;
    connectOrCreate?: Prisma.KegiatanCreateOrConnectWithoutKegiatanMitraObjInput;
    upsert?: Prisma.KegiatanUpsertWithoutKegiatanMitraObjInput;
    connect?: Prisma.KegiatanWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.KegiatanUpdateToOneWithWhereWithoutKegiatanMitraObjInput, Prisma.KegiatanUpdateWithoutKegiatanMitraObjInput>, Prisma.KegiatanUncheckedUpdateWithoutKegiatanMitraObjInput>;
};
export type KegiatanCreateWithoutCreatedByObjInput = {
    uuid?: string;
    name: string;
    description?: string | null;
    start?: string | null;
    end?: string | null;
    monitoring_link?: string | null;
    organic_involved?: boolean | null;
    organic_number?: number | null;
    mitra_involved?: boolean | null;
    mitra_number?: number | null;
    pjObj?: Prisma.UserCreateNestedOneWithoutKegiatanPjObjInput;
    modeObj?: Prisma.KegiatanModeCreateNestedOneWithoutKegiatanObjInput;
    statusObj?: Prisma.KegiatanStatusCreateNestedOneWithoutKegiatanObjInput;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeCreateNestedManyWithoutKegiatanObjInput;
};
export type KegiatanUncheckedCreateWithoutCreatedByObjInput = {
    uuid?: string;
    name: string;
    description?: string | null;
    start?: string | null;
    end?: string | null;
    monitoring_link?: string | null;
    organic_involved?: boolean | null;
    organic_number?: number | null;
    mitra_involved?: boolean | null;
    mitra_number?: number | null;
    penanggung_jawab?: string | null;
    mode?: string | null;
    status?: number;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeUncheckedCreateNestedManyWithoutKegiatanObjInput;
};
export type KegiatanCreateOrConnectWithoutCreatedByObjInput = {
    where: Prisma.KegiatanWhereUniqueInput;
    create: Prisma.XOR<Prisma.KegiatanCreateWithoutCreatedByObjInput, Prisma.KegiatanUncheckedCreateWithoutCreatedByObjInput>;
};
export type KegiatanCreateManyCreatedByObjInputEnvelope = {
    data: Prisma.KegiatanCreateManyCreatedByObjInput | Prisma.KegiatanCreateManyCreatedByObjInput[];
    skipDuplicates?: boolean;
};
export type KegiatanCreateWithoutPjObjInput = {
    uuid?: string;
    name: string;
    description?: string | null;
    start?: string | null;
    end?: string | null;
    monitoring_link?: string | null;
    organic_involved?: boolean | null;
    organic_number?: number | null;
    mitra_involved?: boolean | null;
    mitra_number?: number | null;
    createdByObj?: Prisma.UserCreateNestedOneWithoutKegiatanCreatorObjInput;
    modeObj?: Prisma.KegiatanModeCreateNestedOneWithoutKegiatanObjInput;
    statusObj?: Prisma.KegiatanStatusCreateNestedOneWithoutKegiatanObjInput;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeCreateNestedManyWithoutKegiatanObjInput;
};
export type KegiatanUncheckedCreateWithoutPjObjInput = {
    uuid?: string;
    name: string;
    description?: string | null;
    start?: string | null;
    end?: string | null;
    monitoring_link?: string | null;
    organic_involved?: boolean | null;
    organic_number?: number | null;
    mitra_involved?: boolean | null;
    mitra_number?: number | null;
    created_by?: string | null;
    mode?: string | null;
    status?: number;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeUncheckedCreateNestedManyWithoutKegiatanObjInput;
};
export type KegiatanCreateOrConnectWithoutPjObjInput = {
    where: Prisma.KegiatanWhereUniqueInput;
    create: Prisma.XOR<Prisma.KegiatanCreateWithoutPjObjInput, Prisma.KegiatanUncheckedCreateWithoutPjObjInput>;
};
export type KegiatanCreateManyPjObjInputEnvelope = {
    data: Prisma.KegiatanCreateManyPjObjInput | Prisma.KegiatanCreateManyPjObjInput[];
    skipDuplicates?: boolean;
};
export type KegiatanUpsertWithWhereUniqueWithoutCreatedByObjInput = {
    where: Prisma.KegiatanWhereUniqueInput;
    update: Prisma.XOR<Prisma.KegiatanUpdateWithoutCreatedByObjInput, Prisma.KegiatanUncheckedUpdateWithoutCreatedByObjInput>;
    create: Prisma.XOR<Prisma.KegiatanCreateWithoutCreatedByObjInput, Prisma.KegiatanUncheckedCreateWithoutCreatedByObjInput>;
};
export type KegiatanUpdateWithWhereUniqueWithoutCreatedByObjInput = {
    where: Prisma.KegiatanWhereUniqueInput;
    data: Prisma.XOR<Prisma.KegiatanUpdateWithoutCreatedByObjInput, Prisma.KegiatanUncheckedUpdateWithoutCreatedByObjInput>;
};
export type KegiatanUpdateManyWithWhereWithoutCreatedByObjInput = {
    where: Prisma.KegiatanScalarWhereInput;
    data: Prisma.XOR<Prisma.KegiatanUpdateManyMutationInput, Prisma.KegiatanUncheckedUpdateManyWithoutCreatedByObjInput>;
};
export type KegiatanScalarWhereInput = {
    AND?: Prisma.KegiatanScalarWhereInput | Prisma.KegiatanScalarWhereInput[];
    OR?: Prisma.KegiatanScalarWhereInput[];
    NOT?: Prisma.KegiatanScalarWhereInput | Prisma.KegiatanScalarWhereInput[];
    uuid?: Prisma.StringFilter<"Kegiatan"> | string;
    name?: Prisma.StringFilter<"Kegiatan"> | string;
    description?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    start?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    end?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    monitoring_link?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    organic_involved?: Prisma.BoolNullableFilter<"Kegiatan"> | boolean | null;
    organic_number?: Prisma.IntNullableFilter<"Kegiatan"> | number | null;
    mitra_involved?: Prisma.BoolNullableFilter<"Kegiatan"> | boolean | null;
    mitra_number?: Prisma.IntNullableFilter<"Kegiatan"> | number | null;
    created_by?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    penanggung_jawab?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    mode?: Prisma.StringNullableFilter<"Kegiatan"> | string | null;
    status?: Prisma.IntFilter<"Kegiatan"> | number;
};
export type KegiatanUpsertWithWhereUniqueWithoutPjObjInput = {
    where: Prisma.KegiatanWhereUniqueInput;
    update: Prisma.XOR<Prisma.KegiatanUpdateWithoutPjObjInput, Prisma.KegiatanUncheckedUpdateWithoutPjObjInput>;
    create: Prisma.XOR<Prisma.KegiatanCreateWithoutPjObjInput, Prisma.KegiatanUncheckedCreateWithoutPjObjInput>;
};
export type KegiatanUpdateWithWhereUniqueWithoutPjObjInput = {
    where: Prisma.KegiatanWhereUniqueInput;
    data: Prisma.XOR<Prisma.KegiatanUpdateWithoutPjObjInput, Prisma.KegiatanUncheckedUpdateWithoutPjObjInput>;
};
export type KegiatanUpdateManyWithWhereWithoutPjObjInput = {
    where: Prisma.KegiatanScalarWhereInput;
    data: Prisma.XOR<Prisma.KegiatanUpdateManyMutationInput, Prisma.KegiatanUncheckedUpdateManyWithoutPjObjInput>;
};
export type KegiatanCreateWithoutModeObjInput = {
    uuid?: string;
    name: string;
    description?: string | null;
    start?: string | null;
    end?: string | null;
    monitoring_link?: string | null;
    organic_involved?: boolean | null;
    organic_number?: number | null;
    mitra_involved?: boolean | null;
    mitra_number?: number | null;
    createdByObj?: Prisma.UserCreateNestedOneWithoutKegiatanCreatorObjInput;
    pjObj?: Prisma.UserCreateNestedOneWithoutKegiatanPjObjInput;
    statusObj?: Prisma.KegiatanStatusCreateNestedOneWithoutKegiatanObjInput;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeCreateNestedManyWithoutKegiatanObjInput;
};
export type KegiatanUncheckedCreateWithoutModeObjInput = {
    uuid?: string;
    name: string;
    description?: string | null;
    start?: string | null;
    end?: string | null;
    monitoring_link?: string | null;
    organic_involved?: boolean | null;
    organic_number?: number | null;
    mitra_involved?: boolean | null;
    mitra_number?: number | null;
    created_by?: string | null;
    penanggung_jawab?: string | null;
    status?: number;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeUncheckedCreateNestedManyWithoutKegiatanObjInput;
};
export type KegiatanCreateOrConnectWithoutModeObjInput = {
    where: Prisma.KegiatanWhereUniqueInput;
    create: Prisma.XOR<Prisma.KegiatanCreateWithoutModeObjInput, Prisma.KegiatanUncheckedCreateWithoutModeObjInput>;
};
export type KegiatanCreateManyModeObjInputEnvelope = {
    data: Prisma.KegiatanCreateManyModeObjInput | Prisma.KegiatanCreateManyModeObjInput[];
    skipDuplicates?: boolean;
};
export type KegiatanUpsertWithWhereUniqueWithoutModeObjInput = {
    where: Prisma.KegiatanWhereUniqueInput;
    update: Prisma.XOR<Prisma.KegiatanUpdateWithoutModeObjInput, Prisma.KegiatanUncheckedUpdateWithoutModeObjInput>;
    create: Prisma.XOR<Prisma.KegiatanCreateWithoutModeObjInput, Prisma.KegiatanUncheckedCreateWithoutModeObjInput>;
};
export type KegiatanUpdateWithWhereUniqueWithoutModeObjInput = {
    where: Prisma.KegiatanWhereUniqueInput;
    data: Prisma.XOR<Prisma.KegiatanUpdateWithoutModeObjInput, Prisma.KegiatanUncheckedUpdateWithoutModeObjInput>;
};
export type KegiatanUpdateManyWithWhereWithoutModeObjInput = {
    where: Prisma.KegiatanScalarWhereInput;
    data: Prisma.XOR<Prisma.KegiatanUpdateManyMutationInput, Prisma.KegiatanUncheckedUpdateManyWithoutModeObjInput>;
};
export type KegiatanCreateWithoutStatusObjInput = {
    uuid?: string;
    name: string;
    description?: string | null;
    start?: string | null;
    end?: string | null;
    monitoring_link?: string | null;
    organic_involved?: boolean | null;
    organic_number?: number | null;
    mitra_involved?: boolean | null;
    mitra_number?: number | null;
    createdByObj?: Prisma.UserCreateNestedOneWithoutKegiatanCreatorObjInput;
    pjObj?: Prisma.UserCreateNestedOneWithoutKegiatanPjObjInput;
    modeObj?: Prisma.KegiatanModeCreateNestedOneWithoutKegiatanObjInput;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeCreateNestedManyWithoutKegiatanObjInput;
};
export type KegiatanUncheckedCreateWithoutStatusObjInput = {
    uuid?: string;
    name: string;
    description?: string | null;
    start?: string | null;
    end?: string | null;
    monitoring_link?: string | null;
    organic_involved?: boolean | null;
    organic_number?: number | null;
    mitra_involved?: boolean | null;
    mitra_number?: number | null;
    created_by?: string | null;
    penanggung_jawab?: string | null;
    mode?: string | null;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeUncheckedCreateNestedManyWithoutKegiatanObjInput;
};
export type KegiatanCreateOrConnectWithoutStatusObjInput = {
    where: Prisma.KegiatanWhereUniqueInput;
    create: Prisma.XOR<Prisma.KegiatanCreateWithoutStatusObjInput, Prisma.KegiatanUncheckedCreateWithoutStatusObjInput>;
};
export type KegiatanCreateManyStatusObjInputEnvelope = {
    data: Prisma.KegiatanCreateManyStatusObjInput | Prisma.KegiatanCreateManyStatusObjInput[];
    skipDuplicates?: boolean;
};
export type KegiatanUpsertWithWhereUniqueWithoutStatusObjInput = {
    where: Prisma.KegiatanWhereUniqueInput;
    update: Prisma.XOR<Prisma.KegiatanUpdateWithoutStatusObjInput, Prisma.KegiatanUncheckedUpdateWithoutStatusObjInput>;
    create: Prisma.XOR<Prisma.KegiatanCreateWithoutStatusObjInput, Prisma.KegiatanUncheckedCreateWithoutStatusObjInput>;
};
export type KegiatanUpdateWithWhereUniqueWithoutStatusObjInput = {
    where: Prisma.KegiatanWhereUniqueInput;
    data: Prisma.XOR<Prisma.KegiatanUpdateWithoutStatusObjInput, Prisma.KegiatanUncheckedUpdateWithoutStatusObjInput>;
};
export type KegiatanUpdateManyWithWhereWithoutStatusObjInput = {
    where: Prisma.KegiatanScalarWhereInput;
    data: Prisma.XOR<Prisma.KegiatanUpdateManyMutationInput, Prisma.KegiatanUncheckedUpdateManyWithoutStatusObjInput>;
};
export type KegiatanCreateWithoutKegiatanMitraObjInput = {
    uuid?: string;
    name: string;
    description?: string | null;
    start?: string | null;
    end?: string | null;
    monitoring_link?: string | null;
    organic_involved?: boolean | null;
    organic_number?: number | null;
    mitra_involved?: boolean | null;
    mitra_number?: number | null;
    createdByObj?: Prisma.UserCreateNestedOneWithoutKegiatanCreatorObjInput;
    pjObj?: Prisma.UserCreateNestedOneWithoutKegiatanPjObjInput;
    modeObj?: Prisma.KegiatanModeCreateNestedOneWithoutKegiatanObjInput;
    statusObj?: Prisma.KegiatanStatusCreateNestedOneWithoutKegiatanObjInput;
};
export type KegiatanUncheckedCreateWithoutKegiatanMitraObjInput = {
    uuid?: string;
    name: string;
    description?: string | null;
    start?: string | null;
    end?: string | null;
    monitoring_link?: string | null;
    organic_involved?: boolean | null;
    organic_number?: number | null;
    mitra_involved?: boolean | null;
    mitra_number?: number | null;
    created_by?: string | null;
    penanggung_jawab?: string | null;
    mode?: string | null;
    status?: number;
};
export type KegiatanCreateOrConnectWithoutKegiatanMitraObjInput = {
    where: Prisma.KegiatanWhereUniqueInput;
    create: Prisma.XOR<Prisma.KegiatanCreateWithoutKegiatanMitraObjInput, Prisma.KegiatanUncheckedCreateWithoutKegiatanMitraObjInput>;
};
export type KegiatanUpsertWithoutKegiatanMitraObjInput = {
    update: Prisma.XOR<Prisma.KegiatanUpdateWithoutKegiatanMitraObjInput, Prisma.KegiatanUncheckedUpdateWithoutKegiatanMitraObjInput>;
    create: Prisma.XOR<Prisma.KegiatanCreateWithoutKegiatanMitraObjInput, Prisma.KegiatanUncheckedCreateWithoutKegiatanMitraObjInput>;
    where?: Prisma.KegiatanWhereInput;
};
export type KegiatanUpdateToOneWithWhereWithoutKegiatanMitraObjInput = {
    where?: Prisma.KegiatanWhereInput;
    data: Prisma.XOR<Prisma.KegiatanUpdateWithoutKegiatanMitraObjInput, Prisma.KegiatanUncheckedUpdateWithoutKegiatanMitraObjInput>;
};
export type KegiatanUpdateWithoutKegiatanMitraObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdByObj?: Prisma.UserUpdateOneWithoutKegiatanCreatorObjNestedInput;
    pjObj?: Prisma.UserUpdateOneWithoutKegiatanPjObjNestedInput;
    modeObj?: Prisma.KegiatanModeUpdateOneWithoutKegiatanObjNestedInput;
    statusObj?: Prisma.KegiatanStatusUpdateOneRequiredWithoutKegiatanObjNestedInput;
};
export type KegiatanUncheckedUpdateWithoutKegiatanMitraObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    penanggung_jawab?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type KegiatanCreateManyCreatedByObjInput = {
    uuid?: string;
    name: string;
    description?: string | null;
    start?: string | null;
    end?: string | null;
    monitoring_link?: string | null;
    organic_involved?: boolean | null;
    organic_number?: number | null;
    mitra_involved?: boolean | null;
    mitra_number?: number | null;
    penanggung_jawab?: string | null;
    mode?: string | null;
    status?: number;
};
export type KegiatanCreateManyPjObjInput = {
    uuid?: string;
    name: string;
    description?: string | null;
    start?: string | null;
    end?: string | null;
    monitoring_link?: string | null;
    organic_involved?: boolean | null;
    organic_number?: number | null;
    mitra_involved?: boolean | null;
    mitra_number?: number | null;
    created_by?: string | null;
    mode?: string | null;
    status?: number;
};
export type KegiatanUpdateWithoutCreatedByObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pjObj?: Prisma.UserUpdateOneWithoutKegiatanPjObjNestedInput;
    modeObj?: Prisma.KegiatanModeUpdateOneWithoutKegiatanObjNestedInput;
    statusObj?: Prisma.KegiatanStatusUpdateOneRequiredWithoutKegiatanObjNestedInput;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeUpdateManyWithoutKegiatanObjNestedInput;
};
export type KegiatanUncheckedUpdateWithoutCreatedByObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    penanggung_jawab?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeUncheckedUpdateManyWithoutKegiatanObjNestedInput;
};
export type KegiatanUncheckedUpdateManyWithoutCreatedByObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    penanggung_jawab?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type KegiatanUpdateWithoutPjObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdByObj?: Prisma.UserUpdateOneWithoutKegiatanCreatorObjNestedInput;
    modeObj?: Prisma.KegiatanModeUpdateOneWithoutKegiatanObjNestedInput;
    statusObj?: Prisma.KegiatanStatusUpdateOneRequiredWithoutKegiatanObjNestedInput;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeUpdateManyWithoutKegiatanObjNestedInput;
};
export type KegiatanUncheckedUpdateWithoutPjObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeUncheckedUpdateManyWithoutKegiatanObjNestedInput;
};
export type KegiatanUncheckedUpdateManyWithoutPjObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type KegiatanCreateManyModeObjInput = {
    uuid?: string;
    name: string;
    description?: string | null;
    start?: string | null;
    end?: string | null;
    monitoring_link?: string | null;
    organic_involved?: boolean | null;
    organic_number?: number | null;
    mitra_involved?: boolean | null;
    mitra_number?: number | null;
    created_by?: string | null;
    penanggung_jawab?: string | null;
    status?: number;
};
export type KegiatanUpdateWithoutModeObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdByObj?: Prisma.UserUpdateOneWithoutKegiatanCreatorObjNestedInput;
    pjObj?: Prisma.UserUpdateOneWithoutKegiatanPjObjNestedInput;
    statusObj?: Prisma.KegiatanStatusUpdateOneRequiredWithoutKegiatanObjNestedInput;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeUpdateManyWithoutKegiatanObjNestedInput;
};
export type KegiatanUncheckedUpdateWithoutModeObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    penanggung_jawab?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeUncheckedUpdateManyWithoutKegiatanObjNestedInput;
};
export type KegiatanUncheckedUpdateManyWithoutModeObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    penanggung_jawab?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type KegiatanCreateManyStatusObjInput = {
    uuid?: string;
    name: string;
    description?: string | null;
    start?: string | null;
    end?: string | null;
    monitoring_link?: string | null;
    organic_involved?: boolean | null;
    organic_number?: number | null;
    mitra_involved?: boolean | null;
    mitra_number?: number | null;
    created_by?: string | null;
    penanggung_jawab?: string | null;
    mode?: string | null;
};
export type KegiatanUpdateWithoutStatusObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdByObj?: Prisma.UserUpdateOneWithoutKegiatanCreatorObjNestedInput;
    pjObj?: Prisma.UserUpdateOneWithoutKegiatanPjObjNestedInput;
    modeObj?: Prisma.KegiatanModeUpdateOneWithoutKegiatanObjNestedInput;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeUpdateManyWithoutKegiatanObjNestedInput;
};
export type KegiatanUncheckedUpdateWithoutStatusObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    penanggung_jawab?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kegiatanMitraObj?: Prisma.KegiatanMitraBridgeUncheckedUpdateManyWithoutKegiatanObjNestedInput;
};
export type KegiatanUncheckedUpdateManyWithoutStatusObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    start?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    end?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monitoring_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organic_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    organic_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mitra_involved?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    mitra_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    penanggung_jawab?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type KegiatanCountOutputType
 */
export type KegiatanCountOutputType = {
    kegiatanMitraObj: number;
};
export type KegiatanCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kegiatanMitraObj?: boolean | KegiatanCountOutputTypeCountKegiatanMitraObjArgs;
};
/**
 * KegiatanCountOutputType without action
 */
export type KegiatanCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KegiatanCountOutputType
     */
    select?: Prisma.KegiatanCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * KegiatanCountOutputType without action
 */
export type KegiatanCountOutputTypeCountKegiatanMitraObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KegiatanMitraBridgeWhereInput;
};
export type KegiatanSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    name?: boolean;
    description?: boolean;
    start?: boolean;
    end?: boolean;
    monitoring_link?: boolean;
    organic_involved?: boolean;
    organic_number?: boolean;
    mitra_involved?: boolean;
    mitra_number?: boolean;
    created_by?: boolean;
    penanggung_jawab?: boolean;
    mode?: boolean;
    status?: boolean;
    createdByObj?: boolean | Prisma.Kegiatan$createdByObjArgs<ExtArgs>;
    pjObj?: boolean | Prisma.Kegiatan$pjObjArgs<ExtArgs>;
    modeObj?: boolean | Prisma.Kegiatan$modeObjArgs<ExtArgs>;
    statusObj?: boolean | Prisma.KegiatanStatusDefaultArgs<ExtArgs>;
    kegiatanMitraObj?: boolean | Prisma.Kegiatan$kegiatanMitraObjArgs<ExtArgs>;
    _count?: boolean | Prisma.KegiatanCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kegiatan"]>;
export type KegiatanSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    name?: boolean;
    description?: boolean;
    start?: boolean;
    end?: boolean;
    monitoring_link?: boolean;
    organic_involved?: boolean;
    organic_number?: boolean;
    mitra_involved?: boolean;
    mitra_number?: boolean;
    created_by?: boolean;
    penanggung_jawab?: boolean;
    mode?: boolean;
    status?: boolean;
    createdByObj?: boolean | Prisma.Kegiatan$createdByObjArgs<ExtArgs>;
    pjObj?: boolean | Prisma.Kegiatan$pjObjArgs<ExtArgs>;
    modeObj?: boolean | Prisma.Kegiatan$modeObjArgs<ExtArgs>;
    statusObj?: boolean | Prisma.KegiatanStatusDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kegiatan"]>;
export type KegiatanSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    name?: boolean;
    description?: boolean;
    start?: boolean;
    end?: boolean;
    monitoring_link?: boolean;
    organic_involved?: boolean;
    organic_number?: boolean;
    mitra_involved?: boolean;
    mitra_number?: boolean;
    created_by?: boolean;
    penanggung_jawab?: boolean;
    mode?: boolean;
    status?: boolean;
    createdByObj?: boolean | Prisma.Kegiatan$createdByObjArgs<ExtArgs>;
    pjObj?: boolean | Prisma.Kegiatan$pjObjArgs<ExtArgs>;
    modeObj?: boolean | Prisma.Kegiatan$modeObjArgs<ExtArgs>;
    statusObj?: boolean | Prisma.KegiatanStatusDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kegiatan"]>;
export type KegiatanSelectScalar = {
    uuid?: boolean;
    name?: boolean;
    description?: boolean;
    start?: boolean;
    end?: boolean;
    monitoring_link?: boolean;
    organic_involved?: boolean;
    organic_number?: boolean;
    mitra_involved?: boolean;
    mitra_number?: boolean;
    created_by?: boolean;
    penanggung_jawab?: boolean;
    mode?: boolean;
    status?: boolean;
};
export type KegiatanOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "name" | "description" | "start" | "end" | "monitoring_link" | "organic_involved" | "organic_number" | "mitra_involved" | "mitra_number" | "created_by" | "penanggung_jawab" | "mode" | "status", ExtArgs["result"]["kegiatan"]>;
export type KegiatanInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdByObj?: boolean | Prisma.Kegiatan$createdByObjArgs<ExtArgs>;
    pjObj?: boolean | Prisma.Kegiatan$pjObjArgs<ExtArgs>;
    modeObj?: boolean | Prisma.Kegiatan$modeObjArgs<ExtArgs>;
    statusObj?: boolean | Prisma.KegiatanStatusDefaultArgs<ExtArgs>;
    kegiatanMitraObj?: boolean | Prisma.Kegiatan$kegiatanMitraObjArgs<ExtArgs>;
    _count?: boolean | Prisma.KegiatanCountOutputTypeDefaultArgs<ExtArgs>;
};
export type KegiatanIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdByObj?: boolean | Prisma.Kegiatan$createdByObjArgs<ExtArgs>;
    pjObj?: boolean | Prisma.Kegiatan$pjObjArgs<ExtArgs>;
    modeObj?: boolean | Prisma.Kegiatan$modeObjArgs<ExtArgs>;
    statusObj?: boolean | Prisma.KegiatanStatusDefaultArgs<ExtArgs>;
};
export type KegiatanIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdByObj?: boolean | Prisma.Kegiatan$createdByObjArgs<ExtArgs>;
    pjObj?: boolean | Prisma.Kegiatan$pjObjArgs<ExtArgs>;
    modeObj?: boolean | Prisma.Kegiatan$modeObjArgs<ExtArgs>;
    statusObj?: boolean | Prisma.KegiatanStatusDefaultArgs<ExtArgs>;
};
export type $KegiatanPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Kegiatan";
    objects: {
        createdByObj: Prisma.$UserPayload<ExtArgs> | null;
        pjObj: Prisma.$UserPayload<ExtArgs> | null;
        modeObj: Prisma.$KegiatanModePayload<ExtArgs> | null;
        statusObj: Prisma.$KegiatanStatusPayload<ExtArgs>;
        kegiatanMitraObj: Prisma.$KegiatanMitraBridgePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        name: string;
        description: string | null;
        start: string | null;
        end: string | null;
        monitoring_link: string | null;
        organic_involved: boolean | null;
        organic_number: number | null;
        mitra_involved: boolean | null;
        mitra_number: number | null;
        created_by: string | null;
        penanggung_jawab: string | null;
        mode: string | null;
        status: number;
    }, ExtArgs["result"]["kegiatan"]>;
    composites: {};
};
export type KegiatanGetPayload<S extends boolean | null | undefined | KegiatanDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KegiatanPayload, S>;
export type KegiatanCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KegiatanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KegiatanCountAggregateInputType | true;
};
export interface KegiatanDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Kegiatan'];
        meta: {
            name: 'Kegiatan';
        };
    };
    /**
     * Find zero or one Kegiatan that matches the filter.
     * @param {KegiatanFindUniqueArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KegiatanFindUniqueArgs>(args: Prisma.SelectSubset<T, KegiatanFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KegiatanClient<runtime.Types.Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Kegiatan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KegiatanFindUniqueOrThrowArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KegiatanFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KegiatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KegiatanClient<runtime.Types.Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Kegiatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanFindFirstArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KegiatanFindFirstArgs>(args?: Prisma.SelectSubset<T, KegiatanFindFirstArgs<ExtArgs>>): Prisma.Prisma__KegiatanClient<runtime.Types.Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Kegiatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanFindFirstOrThrowArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KegiatanFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KegiatanFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KegiatanClient<runtime.Types.Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Kegiatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kegiatans
     * const kegiatans = await prisma.kegiatan.findMany()
     *
     * // Get first 10 Kegiatans
     * const kegiatans = await prisma.kegiatan.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const kegiatanWithUuidOnly = await prisma.kegiatan.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends KegiatanFindManyArgs>(args?: Prisma.SelectSubset<T, KegiatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Kegiatan.
     * @param {KegiatanCreateArgs} args - Arguments to create a Kegiatan.
     * @example
     * // Create one Kegiatan
     * const Kegiatan = await prisma.kegiatan.create({
     *   data: {
     *     // ... data to create a Kegiatan
     *   }
     * })
     *
     */
    create<T extends KegiatanCreateArgs>(args: Prisma.SelectSubset<T, KegiatanCreateArgs<ExtArgs>>): Prisma.Prisma__KegiatanClient<runtime.Types.Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Kegiatans.
     * @param {KegiatanCreateManyArgs} args - Arguments to create many Kegiatans.
     * @example
     * // Create many Kegiatans
     * const kegiatan = await prisma.kegiatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends KegiatanCreateManyArgs>(args?: Prisma.SelectSubset<T, KegiatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Kegiatans and returns the data saved in the database.
     * @param {KegiatanCreateManyAndReturnArgs} args - Arguments to create many Kegiatans.
     * @example
     * // Create many Kegiatans
     * const kegiatan = await prisma.kegiatan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Kegiatans and only return the `uuid`
     * const kegiatanWithUuidOnly = await prisma.kegiatan.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends KegiatanCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KegiatanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Kegiatan.
     * @param {KegiatanDeleteArgs} args - Arguments to delete one Kegiatan.
     * @example
     * // Delete one Kegiatan
     * const Kegiatan = await prisma.kegiatan.delete({
     *   where: {
     *     // ... filter to delete one Kegiatan
     *   }
     * })
     *
     */
    delete<T extends KegiatanDeleteArgs>(args: Prisma.SelectSubset<T, KegiatanDeleteArgs<ExtArgs>>): Prisma.Prisma__KegiatanClient<runtime.Types.Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Kegiatan.
     * @param {KegiatanUpdateArgs} args - Arguments to update one Kegiatan.
     * @example
     * // Update one Kegiatan
     * const kegiatan = await prisma.kegiatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends KegiatanUpdateArgs>(args: Prisma.SelectSubset<T, KegiatanUpdateArgs<ExtArgs>>): Prisma.Prisma__KegiatanClient<runtime.Types.Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Kegiatans.
     * @param {KegiatanDeleteManyArgs} args - Arguments to filter Kegiatans to delete.
     * @example
     * // Delete a few Kegiatans
     * const { count } = await prisma.kegiatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends KegiatanDeleteManyArgs>(args?: Prisma.SelectSubset<T, KegiatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Kegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kegiatans
     * const kegiatan = await prisma.kegiatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends KegiatanUpdateManyArgs>(args: Prisma.SelectSubset<T, KegiatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Kegiatans and returns the data updated in the database.
     * @param {KegiatanUpdateManyAndReturnArgs} args - Arguments to update many Kegiatans.
     * @example
     * // Update many Kegiatans
     * const kegiatan = await prisma.kegiatan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Kegiatans and only return the `uuid`
     * const kegiatanWithUuidOnly = await prisma.kegiatan.updateManyAndReturn({
     *   select: { uuid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends KegiatanUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KegiatanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Kegiatan.
     * @param {KegiatanUpsertArgs} args - Arguments to update or create a Kegiatan.
     * @example
     * // Update or create a Kegiatan
     * const kegiatan = await prisma.kegiatan.upsert({
     *   create: {
     *     // ... data to create a Kegiatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kegiatan we want to update
     *   }
     * })
     */
    upsert<T extends KegiatanUpsertArgs>(args: Prisma.SelectSubset<T, KegiatanUpsertArgs<ExtArgs>>): Prisma.Prisma__KegiatanClient<runtime.Types.Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Kegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanCountArgs} args - Arguments to filter Kegiatans to count.
     * @example
     * // Count the number of Kegiatans
     * const count = await prisma.kegiatan.count({
     *   where: {
     *     // ... the filter for the Kegiatans we want to count
     *   }
     * })
    **/
    count<T extends KegiatanCountArgs>(args?: Prisma.Subset<T, KegiatanCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KegiatanCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Kegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KegiatanAggregateArgs>(args: Prisma.Subset<T, KegiatanAggregateArgs>): Prisma.PrismaPromise<GetKegiatanAggregateType<T>>;
    /**
     * Group by Kegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends KegiatanGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KegiatanGroupByArgs['orderBy'];
    } : {
        orderBy?: KegiatanGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KegiatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKegiatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Kegiatan model
     */
    readonly fields: KegiatanFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Kegiatan.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__KegiatanClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    createdByObj<T extends Prisma.Kegiatan$createdByObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Kegiatan$createdByObjArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    pjObj<T extends Prisma.Kegiatan$pjObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Kegiatan$pjObjArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    modeObj<T extends Prisma.Kegiatan$modeObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Kegiatan$modeObjArgs<ExtArgs>>): Prisma.Prisma__KegiatanModeClient<runtime.Types.Result.GetResult<Prisma.$KegiatanModePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    statusObj<T extends Prisma.KegiatanStatusDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KegiatanStatusDefaultArgs<ExtArgs>>): Prisma.Prisma__KegiatanStatusClient<runtime.Types.Result.GetResult<Prisma.$KegiatanStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    kegiatanMitraObj<T extends Prisma.Kegiatan$kegiatanMitraObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Kegiatan$kegiatanMitraObjArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KegiatanMitraBridgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Kegiatan model
 */
export interface KegiatanFieldRefs {
    readonly uuid: Prisma.FieldRef<"Kegiatan", 'String'>;
    readonly name: Prisma.FieldRef<"Kegiatan", 'String'>;
    readonly description: Prisma.FieldRef<"Kegiatan", 'String'>;
    readonly start: Prisma.FieldRef<"Kegiatan", 'String'>;
    readonly end: Prisma.FieldRef<"Kegiatan", 'String'>;
    readonly monitoring_link: Prisma.FieldRef<"Kegiatan", 'String'>;
    readonly organic_involved: Prisma.FieldRef<"Kegiatan", 'Boolean'>;
    readonly organic_number: Prisma.FieldRef<"Kegiatan", 'Int'>;
    readonly mitra_involved: Prisma.FieldRef<"Kegiatan", 'Boolean'>;
    readonly mitra_number: Prisma.FieldRef<"Kegiatan", 'Int'>;
    readonly created_by: Prisma.FieldRef<"Kegiatan", 'String'>;
    readonly penanggung_jawab: Prisma.FieldRef<"Kegiatan", 'String'>;
    readonly mode: Prisma.FieldRef<"Kegiatan", 'String'>;
    readonly status: Prisma.FieldRef<"Kegiatan", 'Int'>;
}
/**
 * Kegiatan findUnique
 */
export type KegiatanFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: Prisma.KegiatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: Prisma.KegiatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KegiatanInclude<ExtArgs> | null;
    /**
     * Filter, which Kegiatan to fetch.
     */
    where: Prisma.KegiatanWhereUniqueInput;
};
/**
 * Kegiatan findUniqueOrThrow
 */
export type KegiatanFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: Prisma.KegiatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: Prisma.KegiatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KegiatanInclude<ExtArgs> | null;
    /**
     * Filter, which Kegiatan to fetch.
     */
    where: Prisma.KegiatanWhereUniqueInput;
};
/**
 * Kegiatan findFirst
 */
export type KegiatanFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: Prisma.KegiatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: Prisma.KegiatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KegiatanInclude<ExtArgs> | null;
    /**
     * Filter, which Kegiatan to fetch.
     */
    where?: Prisma.KegiatanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Kegiatans to fetch.
     */
    orderBy?: Prisma.KegiatanOrderByWithRelationInput | Prisma.KegiatanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Kegiatans.
     */
    cursor?: Prisma.KegiatanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Kegiatans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Kegiatans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Kegiatans.
     */
    distinct?: Prisma.KegiatanScalarFieldEnum | Prisma.KegiatanScalarFieldEnum[];
};
/**
 * Kegiatan findFirstOrThrow
 */
export type KegiatanFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: Prisma.KegiatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: Prisma.KegiatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KegiatanInclude<ExtArgs> | null;
    /**
     * Filter, which Kegiatan to fetch.
     */
    where?: Prisma.KegiatanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Kegiatans to fetch.
     */
    orderBy?: Prisma.KegiatanOrderByWithRelationInput | Prisma.KegiatanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Kegiatans.
     */
    cursor?: Prisma.KegiatanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Kegiatans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Kegiatans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Kegiatans.
     */
    distinct?: Prisma.KegiatanScalarFieldEnum | Prisma.KegiatanScalarFieldEnum[];
};
/**
 * Kegiatan findMany
 */
export type KegiatanFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: Prisma.KegiatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: Prisma.KegiatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KegiatanInclude<ExtArgs> | null;
    /**
     * Filter, which Kegiatans to fetch.
     */
    where?: Prisma.KegiatanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Kegiatans to fetch.
     */
    orderBy?: Prisma.KegiatanOrderByWithRelationInput | Prisma.KegiatanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Kegiatans.
     */
    cursor?: Prisma.KegiatanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Kegiatans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Kegiatans.
     */
    skip?: number;
    distinct?: Prisma.KegiatanScalarFieldEnum | Prisma.KegiatanScalarFieldEnum[];
};
/**
 * Kegiatan create
 */
export type KegiatanCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: Prisma.KegiatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: Prisma.KegiatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KegiatanInclude<ExtArgs> | null;
    /**
     * The data needed to create a Kegiatan.
     */
    data: Prisma.XOR<Prisma.KegiatanCreateInput, Prisma.KegiatanUncheckedCreateInput>;
};
/**
 * Kegiatan createMany
 */
export type KegiatanCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kegiatans.
     */
    data: Prisma.KegiatanCreateManyInput | Prisma.KegiatanCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Kegiatan createManyAndReturn
 */
export type KegiatanCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: Prisma.KegiatanSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: Prisma.KegiatanOmit<ExtArgs> | null;
    /**
     * The data used to create many Kegiatans.
     */
    data: Prisma.KegiatanCreateManyInput | Prisma.KegiatanCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KegiatanIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Kegiatan update
 */
export type KegiatanUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: Prisma.KegiatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: Prisma.KegiatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KegiatanInclude<ExtArgs> | null;
    /**
     * The data needed to update a Kegiatan.
     */
    data: Prisma.XOR<Prisma.KegiatanUpdateInput, Prisma.KegiatanUncheckedUpdateInput>;
    /**
     * Choose, which Kegiatan to update.
     */
    where: Prisma.KegiatanWhereUniqueInput;
};
/**
 * Kegiatan updateMany
 */
export type KegiatanUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Kegiatans.
     */
    data: Prisma.XOR<Prisma.KegiatanUpdateManyMutationInput, Prisma.KegiatanUncheckedUpdateManyInput>;
    /**
     * Filter which Kegiatans to update
     */
    where?: Prisma.KegiatanWhereInput;
    /**
     * Limit how many Kegiatans to update.
     */
    limit?: number;
};
/**
 * Kegiatan updateManyAndReturn
 */
export type KegiatanUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: Prisma.KegiatanSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: Prisma.KegiatanOmit<ExtArgs> | null;
    /**
     * The data used to update Kegiatans.
     */
    data: Prisma.XOR<Prisma.KegiatanUpdateManyMutationInput, Prisma.KegiatanUncheckedUpdateManyInput>;
    /**
     * Filter which Kegiatans to update
     */
    where?: Prisma.KegiatanWhereInput;
    /**
     * Limit how many Kegiatans to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KegiatanIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Kegiatan upsert
 */
export type KegiatanUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: Prisma.KegiatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: Prisma.KegiatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KegiatanInclude<ExtArgs> | null;
    /**
     * The filter to search for the Kegiatan to update in case it exists.
     */
    where: Prisma.KegiatanWhereUniqueInput;
    /**
     * In case the Kegiatan found by the `where` argument doesn't exist, create a new Kegiatan with this data.
     */
    create: Prisma.XOR<Prisma.KegiatanCreateInput, Prisma.KegiatanUncheckedCreateInput>;
    /**
     * In case the Kegiatan was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.KegiatanUpdateInput, Prisma.KegiatanUncheckedUpdateInput>;
};
/**
 * Kegiatan delete
 */
export type KegiatanDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: Prisma.KegiatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: Prisma.KegiatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KegiatanInclude<ExtArgs> | null;
    /**
     * Filter which Kegiatan to delete.
     */
    where: Prisma.KegiatanWhereUniqueInput;
};
/**
 * Kegiatan deleteMany
 */
export type KegiatanDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Kegiatans to delete
     */
    where?: Prisma.KegiatanWhereInput;
    /**
     * Limit how many Kegiatans to delete.
     */
    limit?: number;
};
/**
 * Kegiatan.createdByObj
 */
export type Kegiatan$createdByObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * Kegiatan.pjObj
 */
export type Kegiatan$pjObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * Kegiatan.modeObj
 */
export type Kegiatan$modeObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KegiatanMode
     */
    select?: Prisma.KegiatanModeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KegiatanMode
     */
    omit?: Prisma.KegiatanModeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KegiatanModeInclude<ExtArgs> | null;
    where?: Prisma.KegiatanModeWhereInput;
};
/**
 * Kegiatan.kegiatanMitraObj
 */
export type Kegiatan$kegiatanMitraObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KegiatanMitraBridge
     */
    select?: Prisma.KegiatanMitraBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KegiatanMitraBridge
     */
    omit?: Prisma.KegiatanMitraBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KegiatanMitraBridgeInclude<ExtArgs> | null;
    where?: Prisma.KegiatanMitraBridgeWhereInput;
    orderBy?: Prisma.KegiatanMitraBridgeOrderByWithRelationInput | Prisma.KegiatanMitraBridgeOrderByWithRelationInput[];
    cursor?: Prisma.KegiatanMitraBridgeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KegiatanMitraBridgeScalarFieldEnum | Prisma.KegiatanMitraBridgeScalarFieldEnum[];
};
/**
 * Kegiatan without action
 */
export type KegiatanDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: Prisma.KegiatanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: Prisma.KegiatanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KegiatanInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Kegiatan.d.ts.map