import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model JadwalPst
 *
 */
export type JadwalPstModel = runtime.Types.Result.DefaultSelection<Prisma.$JadwalPstPayload>;
export type AggregateJadwalPst = {
    _count: JadwalPstCountAggregateOutputType | null;
    _min: JadwalPstMinAggregateOutputType | null;
    _max: JadwalPstMaxAggregateOutputType | null;
};
export type JadwalPstMinAggregateOutputType = {
    uuid: string | null;
    start_date: Date | null;
    end_date: Date | null;
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
export type JadwalPstMaxAggregateOutputType = {
    uuid: string | null;
    start_date: Date | null;
    end_date: Date | null;
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
export type JadwalPstCountAggregateOutputType = {
    uuid: number;
    start_date: number;
    end_date: number;
    pst_petugas_name: number;
    pst_petugas_nohp: number;
    pst_petugas_photo: number;
    mpp1_petugas_name: number;
    mpp1_petugas_nohp: number;
    mpp1_petugas_photo: number;
    mpp2_petugas_name: number;
    mpp2_petugas_nohp: number;
    mpp2_petugas_photo: number;
    _all: number;
};
export type JadwalPstMinAggregateInputType = {
    uuid?: true;
    start_date?: true;
    end_date?: true;
    pst_petugas_name?: true;
    pst_petugas_nohp?: true;
    pst_petugas_photo?: true;
    mpp1_petugas_name?: true;
    mpp1_petugas_nohp?: true;
    mpp1_petugas_photo?: true;
    mpp2_petugas_name?: true;
    mpp2_petugas_nohp?: true;
    mpp2_petugas_photo?: true;
};
export type JadwalPstMaxAggregateInputType = {
    uuid?: true;
    start_date?: true;
    end_date?: true;
    pst_petugas_name?: true;
    pst_petugas_nohp?: true;
    pst_petugas_photo?: true;
    mpp1_petugas_name?: true;
    mpp1_petugas_nohp?: true;
    mpp1_petugas_photo?: true;
    mpp2_petugas_name?: true;
    mpp2_petugas_nohp?: true;
    mpp2_petugas_photo?: true;
};
export type JadwalPstCountAggregateInputType = {
    uuid?: true;
    start_date?: true;
    end_date?: true;
    pst_petugas_name?: true;
    pst_petugas_nohp?: true;
    pst_petugas_photo?: true;
    mpp1_petugas_name?: true;
    mpp1_petugas_nohp?: true;
    mpp1_petugas_photo?: true;
    mpp2_petugas_name?: true;
    mpp2_petugas_nohp?: true;
    mpp2_petugas_photo?: true;
    _all?: true;
};
export type JadwalPstAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which JadwalPst to aggregate.
     */
    where?: Prisma.JadwalPstWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JadwalPsts to fetch.
     */
    orderBy?: Prisma.JadwalPstOrderByWithRelationInput | Prisma.JadwalPstOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.JadwalPstWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JadwalPsts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JadwalPsts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned JadwalPsts
    **/
    _count?: true | JadwalPstCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: JadwalPstMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: JadwalPstMaxAggregateInputType;
};
export type GetJadwalPstAggregateType<T extends JadwalPstAggregateArgs> = {
    [P in keyof T & keyof AggregateJadwalPst]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJadwalPst[P]> : Prisma.GetScalarType<T[P], AggregateJadwalPst[P]>;
};
export type JadwalPstGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JadwalPstWhereInput;
    orderBy?: Prisma.JadwalPstOrderByWithAggregationInput | Prisma.JadwalPstOrderByWithAggregationInput[];
    by: Prisma.JadwalPstScalarFieldEnum[] | Prisma.JadwalPstScalarFieldEnum;
    having?: Prisma.JadwalPstScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JadwalPstCountAggregateInputType | true;
    _min?: JadwalPstMinAggregateInputType;
    _max?: JadwalPstMaxAggregateInputType;
};
export type JadwalPstGroupByOutputType = {
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
    _count: JadwalPstCountAggregateOutputType | null;
    _min: JadwalPstMinAggregateOutputType | null;
    _max: JadwalPstMaxAggregateOutputType | null;
};
type GetJadwalPstGroupByPayload<T extends JadwalPstGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JadwalPstGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JadwalPstGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JadwalPstGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JadwalPstGroupByOutputType[P]>;
}>>;
export type JadwalPstWhereInput = {
    AND?: Prisma.JadwalPstWhereInput | Prisma.JadwalPstWhereInput[];
    OR?: Prisma.JadwalPstWhereInput[];
    NOT?: Prisma.JadwalPstWhereInput | Prisma.JadwalPstWhereInput[];
    uuid?: Prisma.StringFilter<"JadwalPst"> | string;
    start_date?: Prisma.DateTimeFilter<"JadwalPst"> | Date | string;
    end_date?: Prisma.DateTimeFilter<"JadwalPst"> | Date | string;
    pst_petugas_name?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
    pst_petugas_nohp?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
    pst_petugas_photo?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
    mpp1_petugas_name?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
    mpp1_petugas_nohp?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
    mpp1_petugas_photo?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
    mpp2_petugas_name?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
    mpp2_petugas_nohp?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
    mpp2_petugas_photo?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
};
export type JadwalPstOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    pst_petugas_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    pst_petugas_nohp?: Prisma.SortOrderInput | Prisma.SortOrder;
    pst_petugas_photo?: Prisma.SortOrderInput | Prisma.SortOrder;
    mpp1_petugas_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    mpp1_petugas_nohp?: Prisma.SortOrderInput | Prisma.SortOrder;
    mpp1_petugas_photo?: Prisma.SortOrderInput | Prisma.SortOrder;
    mpp2_petugas_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    mpp2_petugas_nohp?: Prisma.SortOrderInput | Prisma.SortOrder;
    mpp2_petugas_photo?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type JadwalPstWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    AND?: Prisma.JadwalPstWhereInput | Prisma.JadwalPstWhereInput[];
    OR?: Prisma.JadwalPstWhereInput[];
    NOT?: Prisma.JadwalPstWhereInput | Prisma.JadwalPstWhereInput[];
    start_date?: Prisma.DateTimeFilter<"JadwalPst"> | Date | string;
    end_date?: Prisma.DateTimeFilter<"JadwalPst"> | Date | string;
    pst_petugas_name?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
    pst_petugas_nohp?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
    pst_petugas_photo?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
    mpp1_petugas_name?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
    mpp1_petugas_nohp?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
    mpp1_petugas_photo?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
    mpp2_petugas_name?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
    mpp2_petugas_nohp?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
    mpp2_petugas_photo?: Prisma.StringNullableFilter<"JadwalPst"> | string | null;
}, "uuid">;
export type JadwalPstOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    pst_petugas_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    pst_petugas_nohp?: Prisma.SortOrderInput | Prisma.SortOrder;
    pst_petugas_photo?: Prisma.SortOrderInput | Prisma.SortOrder;
    mpp1_petugas_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    mpp1_petugas_nohp?: Prisma.SortOrderInput | Prisma.SortOrder;
    mpp1_petugas_photo?: Prisma.SortOrderInput | Prisma.SortOrder;
    mpp2_petugas_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    mpp2_petugas_nohp?: Prisma.SortOrderInput | Prisma.SortOrder;
    mpp2_petugas_photo?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.JadwalPstCountOrderByAggregateInput;
    _max?: Prisma.JadwalPstMaxOrderByAggregateInput;
    _min?: Prisma.JadwalPstMinOrderByAggregateInput;
};
export type JadwalPstScalarWhereWithAggregatesInput = {
    AND?: Prisma.JadwalPstScalarWhereWithAggregatesInput | Prisma.JadwalPstScalarWhereWithAggregatesInput[];
    OR?: Prisma.JadwalPstScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JadwalPstScalarWhereWithAggregatesInput | Prisma.JadwalPstScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"JadwalPst"> | string;
    start_date?: Prisma.DateTimeWithAggregatesFilter<"JadwalPst"> | Date | string;
    end_date?: Prisma.DateTimeWithAggregatesFilter<"JadwalPst"> | Date | string;
    pst_petugas_name?: Prisma.StringNullableWithAggregatesFilter<"JadwalPst"> | string | null;
    pst_petugas_nohp?: Prisma.StringNullableWithAggregatesFilter<"JadwalPst"> | string | null;
    pst_petugas_photo?: Prisma.StringNullableWithAggregatesFilter<"JadwalPst"> | string | null;
    mpp1_petugas_name?: Prisma.StringNullableWithAggregatesFilter<"JadwalPst"> | string | null;
    mpp1_petugas_nohp?: Prisma.StringNullableWithAggregatesFilter<"JadwalPst"> | string | null;
    mpp1_petugas_photo?: Prisma.StringNullableWithAggregatesFilter<"JadwalPst"> | string | null;
    mpp2_petugas_name?: Prisma.StringNullableWithAggregatesFilter<"JadwalPst"> | string | null;
    mpp2_petugas_nohp?: Prisma.StringNullableWithAggregatesFilter<"JadwalPst"> | string | null;
    mpp2_petugas_photo?: Prisma.StringNullableWithAggregatesFilter<"JadwalPst"> | string | null;
};
export type JadwalPstCreateInput = {
    uuid?: string;
    start_date: Date | string;
    end_date: Date | string;
    pst_petugas_name?: string | null;
    pst_petugas_nohp?: string | null;
    pst_petugas_photo?: string | null;
    mpp1_petugas_name?: string | null;
    mpp1_petugas_nohp?: string | null;
    mpp1_petugas_photo?: string | null;
    mpp2_petugas_name?: string | null;
    mpp2_petugas_nohp?: string | null;
    mpp2_petugas_photo?: string | null;
};
export type JadwalPstUncheckedCreateInput = {
    uuid?: string;
    start_date: Date | string;
    end_date: Date | string;
    pst_petugas_name?: string | null;
    pst_petugas_nohp?: string | null;
    pst_petugas_photo?: string | null;
    mpp1_petugas_name?: string | null;
    mpp1_petugas_nohp?: string | null;
    mpp1_petugas_photo?: string | null;
    mpp2_petugas_name?: string | null;
    mpp2_petugas_nohp?: string | null;
    mpp2_petugas_photo?: string | null;
};
export type JadwalPstUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pst_petugas_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pst_petugas_nohp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pst_petugas_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp1_petugas_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp1_petugas_nohp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp1_petugas_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp2_petugas_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp2_petugas_nohp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp2_petugas_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type JadwalPstUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pst_petugas_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pst_petugas_nohp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pst_petugas_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp1_petugas_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp1_petugas_nohp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp1_petugas_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp2_petugas_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp2_petugas_nohp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp2_petugas_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type JadwalPstCreateManyInput = {
    uuid?: string;
    start_date: Date | string;
    end_date: Date | string;
    pst_petugas_name?: string | null;
    pst_petugas_nohp?: string | null;
    pst_petugas_photo?: string | null;
    mpp1_petugas_name?: string | null;
    mpp1_petugas_nohp?: string | null;
    mpp1_petugas_photo?: string | null;
    mpp2_petugas_name?: string | null;
    mpp2_petugas_nohp?: string | null;
    mpp2_petugas_photo?: string | null;
};
export type JadwalPstUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pst_petugas_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pst_petugas_nohp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pst_petugas_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp1_petugas_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp1_petugas_nohp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp1_petugas_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp2_petugas_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp2_petugas_nohp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp2_petugas_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type JadwalPstUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pst_petugas_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pst_petugas_nohp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pst_petugas_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp1_petugas_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp1_petugas_nohp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp1_petugas_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp2_petugas_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp2_petugas_nohp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mpp2_petugas_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type JadwalPstCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    pst_petugas_name?: Prisma.SortOrder;
    pst_petugas_nohp?: Prisma.SortOrder;
    pst_petugas_photo?: Prisma.SortOrder;
    mpp1_petugas_name?: Prisma.SortOrder;
    mpp1_petugas_nohp?: Prisma.SortOrder;
    mpp1_petugas_photo?: Prisma.SortOrder;
    mpp2_petugas_name?: Prisma.SortOrder;
    mpp2_petugas_nohp?: Prisma.SortOrder;
    mpp2_petugas_photo?: Prisma.SortOrder;
};
export type JadwalPstMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    pst_petugas_name?: Prisma.SortOrder;
    pst_petugas_nohp?: Prisma.SortOrder;
    pst_petugas_photo?: Prisma.SortOrder;
    mpp1_petugas_name?: Prisma.SortOrder;
    mpp1_petugas_nohp?: Prisma.SortOrder;
    mpp1_petugas_photo?: Prisma.SortOrder;
    mpp2_petugas_name?: Prisma.SortOrder;
    mpp2_petugas_nohp?: Prisma.SortOrder;
    mpp2_petugas_photo?: Prisma.SortOrder;
};
export type JadwalPstMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    pst_petugas_name?: Prisma.SortOrder;
    pst_petugas_nohp?: Prisma.SortOrder;
    pst_petugas_photo?: Prisma.SortOrder;
    mpp1_petugas_name?: Prisma.SortOrder;
    mpp1_petugas_nohp?: Prisma.SortOrder;
    mpp1_petugas_photo?: Prisma.SortOrder;
    mpp2_petugas_name?: Prisma.SortOrder;
    mpp2_petugas_nohp?: Prisma.SortOrder;
    mpp2_petugas_photo?: Prisma.SortOrder;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type JadwalPstSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    pst_petugas_name?: boolean;
    pst_petugas_nohp?: boolean;
    pst_petugas_photo?: boolean;
    mpp1_petugas_name?: boolean;
    mpp1_petugas_nohp?: boolean;
    mpp1_petugas_photo?: boolean;
    mpp2_petugas_name?: boolean;
    mpp2_petugas_nohp?: boolean;
    mpp2_petugas_photo?: boolean;
}, ExtArgs["result"]["jadwalPst"]>;
export type JadwalPstSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    pst_petugas_name?: boolean;
    pst_petugas_nohp?: boolean;
    pst_petugas_photo?: boolean;
    mpp1_petugas_name?: boolean;
    mpp1_petugas_nohp?: boolean;
    mpp1_petugas_photo?: boolean;
    mpp2_petugas_name?: boolean;
    mpp2_petugas_nohp?: boolean;
    mpp2_petugas_photo?: boolean;
}, ExtArgs["result"]["jadwalPst"]>;
export type JadwalPstSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    pst_petugas_name?: boolean;
    pst_petugas_nohp?: boolean;
    pst_petugas_photo?: boolean;
    mpp1_petugas_name?: boolean;
    mpp1_petugas_nohp?: boolean;
    mpp1_petugas_photo?: boolean;
    mpp2_petugas_name?: boolean;
    mpp2_petugas_nohp?: boolean;
    mpp2_petugas_photo?: boolean;
}, ExtArgs["result"]["jadwalPst"]>;
export type JadwalPstSelectScalar = {
    uuid?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    pst_petugas_name?: boolean;
    pst_petugas_nohp?: boolean;
    pst_petugas_photo?: boolean;
    mpp1_petugas_name?: boolean;
    mpp1_petugas_nohp?: boolean;
    mpp1_petugas_photo?: boolean;
    mpp2_petugas_name?: boolean;
    mpp2_petugas_nohp?: boolean;
    mpp2_petugas_photo?: boolean;
};
export type JadwalPstOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "start_date" | "end_date" | "pst_petugas_name" | "pst_petugas_nohp" | "pst_petugas_photo" | "mpp1_petugas_name" | "mpp1_petugas_nohp" | "mpp1_petugas_photo" | "mpp2_petugas_name" | "mpp2_petugas_nohp" | "mpp2_petugas_photo", ExtArgs["result"]["jadwalPst"]>;
export type $JadwalPstPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "JadwalPst";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
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
    }, ExtArgs["result"]["jadwalPst"]>;
    composites: {};
};
export type JadwalPstGetPayload<S extends boolean | null | undefined | JadwalPstDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JadwalPstPayload, S>;
export type JadwalPstCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JadwalPstFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JadwalPstCountAggregateInputType | true;
};
export interface JadwalPstDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['JadwalPst'];
        meta: {
            name: 'JadwalPst';
        };
    };
    /**
     * Find zero or one JadwalPst that matches the filter.
     * @param {JadwalPstFindUniqueArgs} args - Arguments to find a JadwalPst
     * @example
     * // Get one JadwalPst
     * const jadwalPst = await prisma.jadwalPst.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JadwalPstFindUniqueArgs>(args: Prisma.SelectSubset<T, JadwalPstFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JadwalPstClient<runtime.Types.Result.GetResult<Prisma.$JadwalPstPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one JadwalPst that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JadwalPstFindUniqueOrThrowArgs} args - Arguments to find a JadwalPst
     * @example
     * // Get one JadwalPst
     * const jadwalPst = await prisma.jadwalPst.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JadwalPstFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JadwalPstFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JadwalPstClient<runtime.Types.Result.GetResult<Prisma.$JadwalPstPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first JadwalPst that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPstFindFirstArgs} args - Arguments to find a JadwalPst
     * @example
     * // Get one JadwalPst
     * const jadwalPst = await prisma.jadwalPst.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JadwalPstFindFirstArgs>(args?: Prisma.SelectSubset<T, JadwalPstFindFirstArgs<ExtArgs>>): Prisma.Prisma__JadwalPstClient<runtime.Types.Result.GetResult<Prisma.$JadwalPstPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first JadwalPst that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPstFindFirstOrThrowArgs} args - Arguments to find a JadwalPst
     * @example
     * // Get one JadwalPst
     * const jadwalPst = await prisma.jadwalPst.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JadwalPstFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JadwalPstFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JadwalPstClient<runtime.Types.Result.GetResult<Prisma.$JadwalPstPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more JadwalPsts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPstFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JadwalPsts
     * const jadwalPsts = await prisma.jadwalPst.findMany()
     *
     * // Get first 10 JadwalPsts
     * const jadwalPsts = await prisma.jadwalPst.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const jadwalPstWithUuidOnly = await prisma.jadwalPst.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends JadwalPstFindManyArgs>(args?: Prisma.SelectSubset<T, JadwalPstFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JadwalPstPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a JadwalPst.
     * @param {JadwalPstCreateArgs} args - Arguments to create a JadwalPst.
     * @example
     * // Create one JadwalPst
     * const JadwalPst = await prisma.jadwalPst.create({
     *   data: {
     *     // ... data to create a JadwalPst
     *   }
     * })
     *
     */
    create<T extends JadwalPstCreateArgs>(args: Prisma.SelectSubset<T, JadwalPstCreateArgs<ExtArgs>>): Prisma.Prisma__JadwalPstClient<runtime.Types.Result.GetResult<Prisma.$JadwalPstPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many JadwalPsts.
     * @param {JadwalPstCreateManyArgs} args - Arguments to create many JadwalPsts.
     * @example
     * // Create many JadwalPsts
     * const jadwalPst = await prisma.jadwalPst.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JadwalPstCreateManyArgs>(args?: Prisma.SelectSubset<T, JadwalPstCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many JadwalPsts and returns the data saved in the database.
     * @param {JadwalPstCreateManyAndReturnArgs} args - Arguments to create many JadwalPsts.
     * @example
     * // Create many JadwalPsts
     * const jadwalPst = await prisma.jadwalPst.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many JadwalPsts and only return the `uuid`
     * const jadwalPstWithUuidOnly = await prisma.jadwalPst.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JadwalPstCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JadwalPstCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JadwalPstPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a JadwalPst.
     * @param {JadwalPstDeleteArgs} args - Arguments to delete one JadwalPst.
     * @example
     * // Delete one JadwalPst
     * const JadwalPst = await prisma.jadwalPst.delete({
     *   where: {
     *     // ... filter to delete one JadwalPst
     *   }
     * })
     *
     */
    delete<T extends JadwalPstDeleteArgs>(args: Prisma.SelectSubset<T, JadwalPstDeleteArgs<ExtArgs>>): Prisma.Prisma__JadwalPstClient<runtime.Types.Result.GetResult<Prisma.$JadwalPstPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one JadwalPst.
     * @param {JadwalPstUpdateArgs} args - Arguments to update one JadwalPst.
     * @example
     * // Update one JadwalPst
     * const jadwalPst = await prisma.jadwalPst.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JadwalPstUpdateArgs>(args: Prisma.SelectSubset<T, JadwalPstUpdateArgs<ExtArgs>>): Prisma.Prisma__JadwalPstClient<runtime.Types.Result.GetResult<Prisma.$JadwalPstPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more JadwalPsts.
     * @param {JadwalPstDeleteManyArgs} args - Arguments to filter JadwalPsts to delete.
     * @example
     * // Delete a few JadwalPsts
     * const { count } = await prisma.jadwalPst.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JadwalPstDeleteManyArgs>(args?: Prisma.SelectSubset<T, JadwalPstDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more JadwalPsts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPstUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JadwalPsts
     * const jadwalPst = await prisma.jadwalPst.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JadwalPstUpdateManyArgs>(args: Prisma.SelectSubset<T, JadwalPstUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more JadwalPsts and returns the data updated in the database.
     * @param {JadwalPstUpdateManyAndReturnArgs} args - Arguments to update many JadwalPsts.
     * @example
     * // Update many JadwalPsts
     * const jadwalPst = await prisma.jadwalPst.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more JadwalPsts and only return the `uuid`
     * const jadwalPstWithUuidOnly = await prisma.jadwalPst.updateManyAndReturn({
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
    updateManyAndReturn<T extends JadwalPstUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JadwalPstUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JadwalPstPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one JadwalPst.
     * @param {JadwalPstUpsertArgs} args - Arguments to update or create a JadwalPst.
     * @example
     * // Update or create a JadwalPst
     * const jadwalPst = await prisma.jadwalPst.upsert({
     *   create: {
     *     // ... data to create a JadwalPst
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JadwalPst we want to update
     *   }
     * })
     */
    upsert<T extends JadwalPstUpsertArgs>(args: Prisma.SelectSubset<T, JadwalPstUpsertArgs<ExtArgs>>): Prisma.Prisma__JadwalPstClient<runtime.Types.Result.GetResult<Prisma.$JadwalPstPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of JadwalPsts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPstCountArgs} args - Arguments to filter JadwalPsts to count.
     * @example
     * // Count the number of JadwalPsts
     * const count = await prisma.jadwalPst.count({
     *   where: {
     *     // ... the filter for the JadwalPsts we want to count
     *   }
     * })
    **/
    count<T extends JadwalPstCountArgs>(args?: Prisma.Subset<T, JadwalPstCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JadwalPstCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a JadwalPst.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPstAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JadwalPstAggregateArgs>(args: Prisma.Subset<T, JadwalPstAggregateArgs>): Prisma.PrismaPromise<GetJadwalPstAggregateType<T>>;
    /**
     * Group by JadwalPst.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPstGroupByArgs} args - Group by arguments.
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
    groupBy<T extends JadwalPstGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JadwalPstGroupByArgs['orderBy'];
    } : {
        orderBy?: JadwalPstGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JadwalPstGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwalPstGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the JadwalPst model
     */
    readonly fields: JadwalPstFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for JadwalPst.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__JadwalPstClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the JadwalPst model
 */
export interface JadwalPstFieldRefs {
    readonly uuid: Prisma.FieldRef<"JadwalPst", 'String'>;
    readonly start_date: Prisma.FieldRef<"JadwalPst", 'DateTime'>;
    readonly end_date: Prisma.FieldRef<"JadwalPst", 'DateTime'>;
    readonly pst_petugas_name: Prisma.FieldRef<"JadwalPst", 'String'>;
    readonly pst_petugas_nohp: Prisma.FieldRef<"JadwalPst", 'String'>;
    readonly pst_petugas_photo: Prisma.FieldRef<"JadwalPst", 'String'>;
    readonly mpp1_petugas_name: Prisma.FieldRef<"JadwalPst", 'String'>;
    readonly mpp1_petugas_nohp: Prisma.FieldRef<"JadwalPst", 'String'>;
    readonly mpp1_petugas_photo: Prisma.FieldRef<"JadwalPst", 'String'>;
    readonly mpp2_petugas_name: Prisma.FieldRef<"JadwalPst", 'String'>;
    readonly mpp2_petugas_nohp: Prisma.FieldRef<"JadwalPst", 'String'>;
    readonly mpp2_petugas_photo: Prisma.FieldRef<"JadwalPst", 'String'>;
}
/**
 * JadwalPst findUnique
 */
export type JadwalPstFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPst
     */
    select?: Prisma.JadwalPstSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JadwalPst
     */
    omit?: Prisma.JadwalPstOmit<ExtArgs> | null;
    /**
     * Filter, which JadwalPst to fetch.
     */
    where: Prisma.JadwalPstWhereUniqueInput;
};
/**
 * JadwalPst findUniqueOrThrow
 */
export type JadwalPstFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPst
     */
    select?: Prisma.JadwalPstSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JadwalPst
     */
    omit?: Prisma.JadwalPstOmit<ExtArgs> | null;
    /**
     * Filter, which JadwalPst to fetch.
     */
    where: Prisma.JadwalPstWhereUniqueInput;
};
/**
 * JadwalPst findFirst
 */
export type JadwalPstFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPst
     */
    select?: Prisma.JadwalPstSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JadwalPst
     */
    omit?: Prisma.JadwalPstOmit<ExtArgs> | null;
    /**
     * Filter, which JadwalPst to fetch.
     */
    where?: Prisma.JadwalPstWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JadwalPsts to fetch.
     */
    orderBy?: Prisma.JadwalPstOrderByWithRelationInput | Prisma.JadwalPstOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JadwalPsts.
     */
    cursor?: Prisma.JadwalPstWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JadwalPsts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JadwalPsts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JadwalPsts.
     */
    distinct?: Prisma.JadwalPstScalarFieldEnum | Prisma.JadwalPstScalarFieldEnum[];
};
/**
 * JadwalPst findFirstOrThrow
 */
export type JadwalPstFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPst
     */
    select?: Prisma.JadwalPstSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JadwalPst
     */
    omit?: Prisma.JadwalPstOmit<ExtArgs> | null;
    /**
     * Filter, which JadwalPst to fetch.
     */
    where?: Prisma.JadwalPstWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JadwalPsts to fetch.
     */
    orderBy?: Prisma.JadwalPstOrderByWithRelationInput | Prisma.JadwalPstOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JadwalPsts.
     */
    cursor?: Prisma.JadwalPstWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JadwalPsts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JadwalPsts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JadwalPsts.
     */
    distinct?: Prisma.JadwalPstScalarFieldEnum | Prisma.JadwalPstScalarFieldEnum[];
};
/**
 * JadwalPst findMany
 */
export type JadwalPstFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPst
     */
    select?: Prisma.JadwalPstSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JadwalPst
     */
    omit?: Prisma.JadwalPstOmit<ExtArgs> | null;
    /**
     * Filter, which JadwalPsts to fetch.
     */
    where?: Prisma.JadwalPstWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JadwalPsts to fetch.
     */
    orderBy?: Prisma.JadwalPstOrderByWithRelationInput | Prisma.JadwalPstOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing JadwalPsts.
     */
    cursor?: Prisma.JadwalPstWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JadwalPsts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JadwalPsts.
     */
    skip?: number;
    distinct?: Prisma.JadwalPstScalarFieldEnum | Prisma.JadwalPstScalarFieldEnum[];
};
/**
 * JadwalPst create
 */
export type JadwalPstCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPst
     */
    select?: Prisma.JadwalPstSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JadwalPst
     */
    omit?: Prisma.JadwalPstOmit<ExtArgs> | null;
    /**
     * The data needed to create a JadwalPst.
     */
    data: Prisma.XOR<Prisma.JadwalPstCreateInput, Prisma.JadwalPstUncheckedCreateInput>;
};
/**
 * JadwalPst createMany
 */
export type JadwalPstCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many JadwalPsts.
     */
    data: Prisma.JadwalPstCreateManyInput | Prisma.JadwalPstCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * JadwalPst createManyAndReturn
 */
export type JadwalPstCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPst
     */
    select?: Prisma.JadwalPstSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JadwalPst
     */
    omit?: Prisma.JadwalPstOmit<ExtArgs> | null;
    /**
     * The data used to create many JadwalPsts.
     */
    data: Prisma.JadwalPstCreateManyInput | Prisma.JadwalPstCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * JadwalPst update
 */
export type JadwalPstUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPst
     */
    select?: Prisma.JadwalPstSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JadwalPst
     */
    omit?: Prisma.JadwalPstOmit<ExtArgs> | null;
    /**
     * The data needed to update a JadwalPst.
     */
    data: Prisma.XOR<Prisma.JadwalPstUpdateInput, Prisma.JadwalPstUncheckedUpdateInput>;
    /**
     * Choose, which JadwalPst to update.
     */
    where: Prisma.JadwalPstWhereUniqueInput;
};
/**
 * JadwalPst updateMany
 */
export type JadwalPstUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update JadwalPsts.
     */
    data: Prisma.XOR<Prisma.JadwalPstUpdateManyMutationInput, Prisma.JadwalPstUncheckedUpdateManyInput>;
    /**
     * Filter which JadwalPsts to update
     */
    where?: Prisma.JadwalPstWhereInput;
    /**
     * Limit how many JadwalPsts to update.
     */
    limit?: number;
};
/**
 * JadwalPst updateManyAndReturn
 */
export type JadwalPstUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPst
     */
    select?: Prisma.JadwalPstSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JadwalPst
     */
    omit?: Prisma.JadwalPstOmit<ExtArgs> | null;
    /**
     * The data used to update JadwalPsts.
     */
    data: Prisma.XOR<Prisma.JadwalPstUpdateManyMutationInput, Prisma.JadwalPstUncheckedUpdateManyInput>;
    /**
     * Filter which JadwalPsts to update
     */
    where?: Prisma.JadwalPstWhereInput;
    /**
     * Limit how many JadwalPsts to update.
     */
    limit?: number;
};
/**
 * JadwalPst upsert
 */
export type JadwalPstUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPst
     */
    select?: Prisma.JadwalPstSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JadwalPst
     */
    omit?: Prisma.JadwalPstOmit<ExtArgs> | null;
    /**
     * The filter to search for the JadwalPst to update in case it exists.
     */
    where: Prisma.JadwalPstWhereUniqueInput;
    /**
     * In case the JadwalPst found by the `where` argument doesn't exist, create a new JadwalPst with this data.
     */
    create: Prisma.XOR<Prisma.JadwalPstCreateInput, Prisma.JadwalPstUncheckedCreateInput>;
    /**
     * In case the JadwalPst was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.JadwalPstUpdateInput, Prisma.JadwalPstUncheckedUpdateInput>;
};
/**
 * JadwalPst delete
 */
export type JadwalPstDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPst
     */
    select?: Prisma.JadwalPstSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JadwalPst
     */
    omit?: Prisma.JadwalPstOmit<ExtArgs> | null;
    /**
     * Filter which JadwalPst to delete.
     */
    where: Prisma.JadwalPstWhereUniqueInput;
};
/**
 * JadwalPst deleteMany
 */
export type JadwalPstDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which JadwalPsts to delete
     */
    where?: Prisma.JadwalPstWhereInput;
    /**
     * Limit how many JadwalPsts to delete.
     */
    limit?: number;
};
/**
 * JadwalPst without action
 */
export type JadwalPstDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPst
     */
    select?: Prisma.JadwalPstSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JadwalPst
     */
    omit?: Prisma.JadwalPstOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=JadwalPst.d.ts.map