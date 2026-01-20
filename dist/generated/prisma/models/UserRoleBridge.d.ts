import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model UserRoleBridge
 *
 */
export type UserRoleBridgeModel = runtime.Types.Result.DefaultSelection<Prisma.$UserRoleBridgePayload>;
export type AggregateUserRoleBridge = {
    _count: UserRoleBridgeCountAggregateOutputType | null;
    _min: UserRoleBridgeMinAggregateOutputType | null;
    _max: UserRoleBridgeMaxAggregateOutputType | null;
};
export type UserRoleBridgeMinAggregateOutputType = {
    description: string | null;
    username: string | null;
};
export type UserRoleBridgeMaxAggregateOutputType = {
    description: string | null;
    username: string | null;
};
export type UserRoleBridgeCountAggregateOutputType = {
    description: number;
    username: number;
    _all: number;
};
export type UserRoleBridgeMinAggregateInputType = {
    description?: true;
    username?: true;
};
export type UserRoleBridgeMaxAggregateInputType = {
    description?: true;
    username?: true;
};
export type UserRoleBridgeCountAggregateInputType = {
    description?: true;
    username?: true;
    _all?: true;
};
export type UserRoleBridgeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoleBridge to aggregate.
     */
    where?: Prisma.UserRoleBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserRoleBridges to fetch.
     */
    orderBy?: Prisma.UserRoleBridgeOrderByWithRelationInput | Prisma.UserRoleBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserRoleBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserRoleBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserRoleBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserRoleBridges
    **/
    _count?: true | UserRoleBridgeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleBridgeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleBridgeMaxAggregateInputType;
};
export type GetUserRoleBridgeAggregateType<T extends UserRoleBridgeAggregateArgs> = {
    [P in keyof T & keyof AggregateUserRoleBridge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserRoleBridge[P]> : Prisma.GetScalarType<T[P], AggregateUserRoleBridge[P]>;
};
export type UserRoleBridgeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserRoleBridgeWhereInput;
    orderBy?: Prisma.UserRoleBridgeOrderByWithAggregationInput | Prisma.UserRoleBridgeOrderByWithAggregationInput[];
    by: Prisma.UserRoleBridgeScalarFieldEnum[] | Prisma.UserRoleBridgeScalarFieldEnum;
    having?: Prisma.UserRoleBridgeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserRoleBridgeCountAggregateInputType | true;
    _min?: UserRoleBridgeMinAggregateInputType;
    _max?: UserRoleBridgeMaxAggregateInputType;
};
export type UserRoleBridgeGroupByOutputType = {
    description: string;
    username: string;
    _count: UserRoleBridgeCountAggregateOutputType | null;
    _min: UserRoleBridgeMinAggregateOutputType | null;
    _max: UserRoleBridgeMaxAggregateOutputType | null;
};
type GetUserRoleBridgeGroupByPayload<T extends UserRoleBridgeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserRoleBridgeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserRoleBridgeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserRoleBridgeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserRoleBridgeGroupByOutputType[P]>;
}>>;
export type UserRoleBridgeWhereInput = {
    AND?: Prisma.UserRoleBridgeWhereInput | Prisma.UserRoleBridgeWhereInput[];
    OR?: Prisma.UserRoleBridgeWhereInput[];
    NOT?: Prisma.UserRoleBridgeWhereInput | Prisma.UserRoleBridgeWhereInput[];
    description?: Prisma.StringFilter<"UserRoleBridge"> | string;
    username?: Prisma.StringFilter<"UserRoleBridge"> | string;
    roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.RolesWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type UserRoleBridgeOrderByWithRelationInput = {
    description?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    roles?: Prisma.RolesOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type UserRoleBridgeWhereUniqueInput = Prisma.AtLeast<{
    description_username?: Prisma.UserRoleBridgeDescriptionUsernameCompoundUniqueInput;
    AND?: Prisma.UserRoleBridgeWhereInput | Prisma.UserRoleBridgeWhereInput[];
    OR?: Prisma.UserRoleBridgeWhereInput[];
    NOT?: Prisma.UserRoleBridgeWhereInput | Prisma.UserRoleBridgeWhereInput[];
    description?: Prisma.StringFilter<"UserRoleBridge"> | string;
    username?: Prisma.StringFilter<"UserRoleBridge"> | string;
    roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.RolesWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "description_username" | "description_username">;
export type UserRoleBridgeOrderByWithAggregationInput = {
    description?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    _count?: Prisma.UserRoleBridgeCountOrderByAggregateInput;
    _max?: Prisma.UserRoleBridgeMaxOrderByAggregateInput;
    _min?: Prisma.UserRoleBridgeMinOrderByAggregateInput;
};
export type UserRoleBridgeScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserRoleBridgeScalarWhereWithAggregatesInput | Prisma.UserRoleBridgeScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserRoleBridgeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserRoleBridgeScalarWhereWithAggregatesInput | Prisma.UserRoleBridgeScalarWhereWithAggregatesInput[];
    description?: Prisma.StringWithAggregatesFilter<"UserRoleBridge"> | string;
    username?: Prisma.StringWithAggregatesFilter<"UserRoleBridge"> | string;
};
export type UserRoleBridgeCreateInput = {
    roles: Prisma.RolesCreateNestedOneWithoutUserRoleBridgeInput;
    user: Prisma.UserCreateNestedOneWithoutUserRoleBridgeInput;
};
export type UserRoleBridgeUncheckedCreateInput = {
    description: string;
    username: string;
};
export type UserRoleBridgeUpdateInput = {
    roles?: Prisma.RolesUpdateOneRequiredWithoutUserRoleBridgeNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutUserRoleBridgeNestedInput;
};
export type UserRoleBridgeUncheckedUpdateInput = {
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserRoleBridgeCreateManyInput = {
    description: string;
    username: string;
};
export type UserRoleBridgeUpdateManyMutationInput = {};
export type UserRoleBridgeUncheckedUpdateManyInput = {
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserRoleBridgeListRelationFilter = {
    every?: Prisma.UserRoleBridgeWhereInput;
    some?: Prisma.UserRoleBridgeWhereInput;
    none?: Prisma.UserRoleBridgeWhereInput;
};
export type UserRoleBridgeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserRoleBridgeDescriptionUsernameCompoundUniqueInput = {
    description: string;
    username: string;
};
export type UserRoleBridgeCountOrderByAggregateInput = {
    description?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
};
export type UserRoleBridgeMaxOrderByAggregateInput = {
    description?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
};
export type UserRoleBridgeMinOrderByAggregateInput = {
    description?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
};
export type UserRoleBridgeCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserRoleBridgeCreateWithoutUserInput, Prisma.UserRoleBridgeUncheckedCreateWithoutUserInput> | Prisma.UserRoleBridgeCreateWithoutUserInput[] | Prisma.UserRoleBridgeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserRoleBridgeCreateOrConnectWithoutUserInput | Prisma.UserRoleBridgeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserRoleBridgeCreateManyUserInputEnvelope;
    connect?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
};
export type UserRoleBridgeUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserRoleBridgeCreateWithoutUserInput, Prisma.UserRoleBridgeUncheckedCreateWithoutUserInput> | Prisma.UserRoleBridgeCreateWithoutUserInput[] | Prisma.UserRoleBridgeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserRoleBridgeCreateOrConnectWithoutUserInput | Prisma.UserRoleBridgeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserRoleBridgeCreateManyUserInputEnvelope;
    connect?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
};
export type UserRoleBridgeUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserRoleBridgeCreateWithoutUserInput, Prisma.UserRoleBridgeUncheckedCreateWithoutUserInput> | Prisma.UserRoleBridgeCreateWithoutUserInput[] | Prisma.UserRoleBridgeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserRoleBridgeCreateOrConnectWithoutUserInput | Prisma.UserRoleBridgeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserRoleBridgeUpsertWithWhereUniqueWithoutUserInput | Prisma.UserRoleBridgeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserRoleBridgeCreateManyUserInputEnvelope;
    set?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
    disconnect?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
    delete?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
    connect?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
    update?: Prisma.UserRoleBridgeUpdateWithWhereUniqueWithoutUserInput | Prisma.UserRoleBridgeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserRoleBridgeUpdateManyWithWhereWithoutUserInput | Prisma.UserRoleBridgeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserRoleBridgeScalarWhereInput | Prisma.UserRoleBridgeScalarWhereInput[];
};
export type UserRoleBridgeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserRoleBridgeCreateWithoutUserInput, Prisma.UserRoleBridgeUncheckedCreateWithoutUserInput> | Prisma.UserRoleBridgeCreateWithoutUserInput[] | Prisma.UserRoleBridgeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserRoleBridgeCreateOrConnectWithoutUserInput | Prisma.UserRoleBridgeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserRoleBridgeUpsertWithWhereUniqueWithoutUserInput | Prisma.UserRoleBridgeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserRoleBridgeCreateManyUserInputEnvelope;
    set?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
    disconnect?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
    delete?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
    connect?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
    update?: Prisma.UserRoleBridgeUpdateWithWhereUniqueWithoutUserInput | Prisma.UserRoleBridgeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserRoleBridgeUpdateManyWithWhereWithoutUserInput | Prisma.UserRoleBridgeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserRoleBridgeScalarWhereInput | Prisma.UserRoleBridgeScalarWhereInput[];
};
export type UserRoleBridgeCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.UserRoleBridgeCreateWithoutRolesInput, Prisma.UserRoleBridgeUncheckedCreateWithoutRolesInput> | Prisma.UserRoleBridgeCreateWithoutRolesInput[] | Prisma.UserRoleBridgeUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UserRoleBridgeCreateOrConnectWithoutRolesInput | Prisma.UserRoleBridgeCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.UserRoleBridgeCreateManyRolesInputEnvelope;
    connect?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
};
export type UserRoleBridgeUncheckedCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.UserRoleBridgeCreateWithoutRolesInput, Prisma.UserRoleBridgeUncheckedCreateWithoutRolesInput> | Prisma.UserRoleBridgeCreateWithoutRolesInput[] | Prisma.UserRoleBridgeUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UserRoleBridgeCreateOrConnectWithoutRolesInput | Prisma.UserRoleBridgeCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.UserRoleBridgeCreateManyRolesInputEnvelope;
    connect?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
};
export type UserRoleBridgeUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.UserRoleBridgeCreateWithoutRolesInput, Prisma.UserRoleBridgeUncheckedCreateWithoutRolesInput> | Prisma.UserRoleBridgeCreateWithoutRolesInput[] | Prisma.UserRoleBridgeUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UserRoleBridgeCreateOrConnectWithoutRolesInput | Prisma.UserRoleBridgeCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.UserRoleBridgeUpsertWithWhereUniqueWithoutRolesInput | Prisma.UserRoleBridgeUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.UserRoleBridgeCreateManyRolesInputEnvelope;
    set?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
    disconnect?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
    delete?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
    connect?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
    update?: Prisma.UserRoleBridgeUpdateWithWhereUniqueWithoutRolesInput | Prisma.UserRoleBridgeUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.UserRoleBridgeUpdateManyWithWhereWithoutRolesInput | Prisma.UserRoleBridgeUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.UserRoleBridgeScalarWhereInput | Prisma.UserRoleBridgeScalarWhereInput[];
};
export type UserRoleBridgeUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.UserRoleBridgeCreateWithoutRolesInput, Prisma.UserRoleBridgeUncheckedCreateWithoutRolesInput> | Prisma.UserRoleBridgeCreateWithoutRolesInput[] | Prisma.UserRoleBridgeUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UserRoleBridgeCreateOrConnectWithoutRolesInput | Prisma.UserRoleBridgeCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.UserRoleBridgeUpsertWithWhereUniqueWithoutRolesInput | Prisma.UserRoleBridgeUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.UserRoleBridgeCreateManyRolesInputEnvelope;
    set?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
    disconnect?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
    delete?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
    connect?: Prisma.UserRoleBridgeWhereUniqueInput | Prisma.UserRoleBridgeWhereUniqueInput[];
    update?: Prisma.UserRoleBridgeUpdateWithWhereUniqueWithoutRolesInput | Prisma.UserRoleBridgeUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.UserRoleBridgeUpdateManyWithWhereWithoutRolesInput | Prisma.UserRoleBridgeUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.UserRoleBridgeScalarWhereInput | Prisma.UserRoleBridgeScalarWhereInput[];
};
export type UserRoleBridgeCreateWithoutUserInput = {
    roles: Prisma.RolesCreateNestedOneWithoutUserRoleBridgeInput;
};
export type UserRoleBridgeUncheckedCreateWithoutUserInput = {
    description: string;
};
export type UserRoleBridgeCreateOrConnectWithoutUserInput = {
    where: Prisma.UserRoleBridgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserRoleBridgeCreateWithoutUserInput, Prisma.UserRoleBridgeUncheckedCreateWithoutUserInput>;
};
export type UserRoleBridgeCreateManyUserInputEnvelope = {
    data: Prisma.UserRoleBridgeCreateManyUserInput | Prisma.UserRoleBridgeCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserRoleBridgeUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserRoleBridgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserRoleBridgeUpdateWithoutUserInput, Prisma.UserRoleBridgeUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserRoleBridgeCreateWithoutUserInput, Prisma.UserRoleBridgeUncheckedCreateWithoutUserInput>;
};
export type UserRoleBridgeUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserRoleBridgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserRoleBridgeUpdateWithoutUserInput, Prisma.UserRoleBridgeUncheckedUpdateWithoutUserInput>;
};
export type UserRoleBridgeUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserRoleBridgeScalarWhereInput;
    data: Prisma.XOR<Prisma.UserRoleBridgeUpdateManyMutationInput, Prisma.UserRoleBridgeUncheckedUpdateManyWithoutUserInput>;
};
export type UserRoleBridgeScalarWhereInput = {
    AND?: Prisma.UserRoleBridgeScalarWhereInput | Prisma.UserRoleBridgeScalarWhereInput[];
    OR?: Prisma.UserRoleBridgeScalarWhereInput[];
    NOT?: Prisma.UserRoleBridgeScalarWhereInput | Prisma.UserRoleBridgeScalarWhereInput[];
    description?: Prisma.StringFilter<"UserRoleBridge"> | string;
    username?: Prisma.StringFilter<"UserRoleBridge"> | string;
};
export type UserRoleBridgeCreateWithoutRolesInput = {
    user: Prisma.UserCreateNestedOneWithoutUserRoleBridgeInput;
};
export type UserRoleBridgeUncheckedCreateWithoutRolesInput = {
    username: string;
};
export type UserRoleBridgeCreateOrConnectWithoutRolesInput = {
    where: Prisma.UserRoleBridgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserRoleBridgeCreateWithoutRolesInput, Prisma.UserRoleBridgeUncheckedCreateWithoutRolesInput>;
};
export type UserRoleBridgeCreateManyRolesInputEnvelope = {
    data: Prisma.UserRoleBridgeCreateManyRolesInput | Prisma.UserRoleBridgeCreateManyRolesInput[];
    skipDuplicates?: boolean;
};
export type UserRoleBridgeUpsertWithWhereUniqueWithoutRolesInput = {
    where: Prisma.UserRoleBridgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserRoleBridgeUpdateWithoutRolesInput, Prisma.UserRoleBridgeUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.UserRoleBridgeCreateWithoutRolesInput, Prisma.UserRoleBridgeUncheckedCreateWithoutRolesInput>;
};
export type UserRoleBridgeUpdateWithWhereUniqueWithoutRolesInput = {
    where: Prisma.UserRoleBridgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserRoleBridgeUpdateWithoutRolesInput, Prisma.UserRoleBridgeUncheckedUpdateWithoutRolesInput>;
};
export type UserRoleBridgeUpdateManyWithWhereWithoutRolesInput = {
    where: Prisma.UserRoleBridgeScalarWhereInput;
    data: Prisma.XOR<Prisma.UserRoleBridgeUpdateManyMutationInput, Prisma.UserRoleBridgeUncheckedUpdateManyWithoutRolesInput>;
};
export type UserRoleBridgeCreateManyUserInput = {
    description: string;
};
export type UserRoleBridgeUpdateWithoutUserInput = {
    roles?: Prisma.RolesUpdateOneRequiredWithoutUserRoleBridgeNestedInput;
};
export type UserRoleBridgeUncheckedUpdateWithoutUserInput = {
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserRoleBridgeUncheckedUpdateManyWithoutUserInput = {
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserRoleBridgeCreateManyRolesInput = {
    username: string;
};
export type UserRoleBridgeUpdateWithoutRolesInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutUserRoleBridgeNestedInput;
};
export type UserRoleBridgeUncheckedUpdateWithoutRolesInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserRoleBridgeUncheckedUpdateManyWithoutRolesInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserRoleBridgeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    description?: boolean;
    username?: boolean;
    roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userRoleBridge"]>;
export type UserRoleBridgeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    description?: boolean;
    username?: boolean;
    roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userRoleBridge"]>;
export type UserRoleBridgeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    description?: boolean;
    username?: boolean;
    roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userRoleBridge"]>;
export type UserRoleBridgeSelectScalar = {
    description?: boolean;
    username?: boolean;
};
export type UserRoleBridgeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"description" | "username", ExtArgs["result"]["userRoleBridge"]>;
export type UserRoleBridgeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UserRoleBridgeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UserRoleBridgeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $UserRoleBridgePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserRoleBridge";
    objects: {
        roles: Prisma.$RolesPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        description: string;
        username: string;
    }, ExtArgs["result"]["userRoleBridge"]>;
    composites: {};
};
export type UserRoleBridgeGetPayload<S extends boolean | null | undefined | UserRoleBridgeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserRoleBridgePayload, S>;
export type UserRoleBridgeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserRoleBridgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserRoleBridgeCountAggregateInputType | true;
};
export interface UserRoleBridgeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserRoleBridge'];
        meta: {
            name: 'UserRoleBridge';
        };
    };
    /**
     * Find zero or one UserRoleBridge that matches the filter.
     * @param {UserRoleBridgeFindUniqueArgs} args - Arguments to find a UserRoleBridge
     * @example
     * // Get one UserRoleBridge
     * const userRoleBridge = await prisma.userRoleBridge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleBridgeFindUniqueArgs>(args: Prisma.SelectSubset<T, UserRoleBridgeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserRoleBridgeClient<runtime.Types.Result.GetResult<Prisma.$UserRoleBridgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one UserRoleBridge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleBridgeFindUniqueOrThrowArgs} args - Arguments to find a UserRoleBridge
     * @example
     * // Get one UserRoleBridge
     * const userRoleBridge = await prisma.userRoleBridge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleBridgeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserRoleBridgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserRoleBridgeClient<runtime.Types.Result.GetResult<Prisma.$UserRoleBridgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UserRoleBridge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleBridgeFindFirstArgs} args - Arguments to find a UserRoleBridge
     * @example
     * // Get one UserRoleBridge
     * const userRoleBridge = await prisma.userRoleBridge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleBridgeFindFirstArgs>(args?: Prisma.SelectSubset<T, UserRoleBridgeFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserRoleBridgeClient<runtime.Types.Result.GetResult<Prisma.$UserRoleBridgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UserRoleBridge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleBridgeFindFirstOrThrowArgs} args - Arguments to find a UserRoleBridge
     * @example
     * // Get one UserRoleBridge
     * const userRoleBridge = await prisma.userRoleBridge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleBridgeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserRoleBridgeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserRoleBridgeClient<runtime.Types.Result.GetResult<Prisma.$UserRoleBridgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more UserRoleBridges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleBridgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoleBridges
     * const userRoleBridges = await prisma.userRoleBridge.findMany()
     *
     * // Get first 10 UserRoleBridges
     * const userRoleBridges = await prisma.userRoleBridge.findMany({ take: 10 })
     *
     * // Only select the `description`
     * const userRoleBridgeWithDescriptionOnly = await prisma.userRoleBridge.findMany({ select: { description: true } })
     *
     */
    findMany<T extends UserRoleBridgeFindManyArgs>(args?: Prisma.SelectSubset<T, UserRoleBridgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserRoleBridgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a UserRoleBridge.
     * @param {UserRoleBridgeCreateArgs} args - Arguments to create a UserRoleBridge.
     * @example
     * // Create one UserRoleBridge
     * const UserRoleBridge = await prisma.userRoleBridge.create({
     *   data: {
     *     // ... data to create a UserRoleBridge
     *   }
     * })
     *
     */
    create<T extends UserRoleBridgeCreateArgs>(args: Prisma.SelectSubset<T, UserRoleBridgeCreateArgs<ExtArgs>>): Prisma.Prisma__UserRoleBridgeClient<runtime.Types.Result.GetResult<Prisma.$UserRoleBridgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many UserRoleBridges.
     * @param {UserRoleBridgeCreateManyArgs} args - Arguments to create many UserRoleBridges.
     * @example
     * // Create many UserRoleBridges
     * const userRoleBridge = await prisma.userRoleBridge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserRoleBridgeCreateManyArgs>(args?: Prisma.SelectSubset<T, UserRoleBridgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many UserRoleBridges and returns the data saved in the database.
     * @param {UserRoleBridgeCreateManyAndReturnArgs} args - Arguments to create many UserRoleBridges.
     * @example
     * // Create many UserRoleBridges
     * const userRoleBridge = await prisma.userRoleBridge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserRoleBridges and only return the `description`
     * const userRoleBridgeWithDescriptionOnly = await prisma.userRoleBridge.createManyAndReturn({
     *   select: { description: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserRoleBridgeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserRoleBridgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserRoleBridgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a UserRoleBridge.
     * @param {UserRoleBridgeDeleteArgs} args - Arguments to delete one UserRoleBridge.
     * @example
     * // Delete one UserRoleBridge
     * const UserRoleBridge = await prisma.userRoleBridge.delete({
     *   where: {
     *     // ... filter to delete one UserRoleBridge
     *   }
     * })
     *
     */
    delete<T extends UserRoleBridgeDeleteArgs>(args: Prisma.SelectSubset<T, UserRoleBridgeDeleteArgs<ExtArgs>>): Prisma.Prisma__UserRoleBridgeClient<runtime.Types.Result.GetResult<Prisma.$UserRoleBridgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one UserRoleBridge.
     * @param {UserRoleBridgeUpdateArgs} args - Arguments to update one UserRoleBridge.
     * @example
     * // Update one UserRoleBridge
     * const userRoleBridge = await prisma.userRoleBridge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserRoleBridgeUpdateArgs>(args: Prisma.SelectSubset<T, UserRoleBridgeUpdateArgs<ExtArgs>>): Prisma.Prisma__UserRoleBridgeClient<runtime.Types.Result.GetResult<Prisma.$UserRoleBridgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more UserRoleBridges.
     * @param {UserRoleBridgeDeleteManyArgs} args - Arguments to filter UserRoleBridges to delete.
     * @example
     * // Delete a few UserRoleBridges
     * const { count } = await prisma.userRoleBridge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserRoleBridgeDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserRoleBridgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UserRoleBridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleBridgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoleBridges
     * const userRoleBridge = await prisma.userRoleBridge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserRoleBridgeUpdateManyArgs>(args: Prisma.SelectSubset<T, UserRoleBridgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UserRoleBridges and returns the data updated in the database.
     * @param {UserRoleBridgeUpdateManyAndReturnArgs} args - Arguments to update many UserRoleBridges.
     * @example
     * // Update many UserRoleBridges
     * const userRoleBridge = await prisma.userRoleBridge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserRoleBridges and only return the `description`
     * const userRoleBridgeWithDescriptionOnly = await prisma.userRoleBridge.updateManyAndReturn({
     *   select: { description: true },
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
    updateManyAndReturn<T extends UserRoleBridgeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserRoleBridgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserRoleBridgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one UserRoleBridge.
     * @param {UserRoleBridgeUpsertArgs} args - Arguments to update or create a UserRoleBridge.
     * @example
     * // Update or create a UserRoleBridge
     * const userRoleBridge = await prisma.userRoleBridge.upsert({
     *   create: {
     *     // ... data to create a UserRoleBridge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRoleBridge we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleBridgeUpsertArgs>(args: Prisma.SelectSubset<T, UserRoleBridgeUpsertArgs<ExtArgs>>): Prisma.Prisma__UserRoleBridgeClient<runtime.Types.Result.GetResult<Prisma.$UserRoleBridgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of UserRoleBridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleBridgeCountArgs} args - Arguments to filter UserRoleBridges to count.
     * @example
     * // Count the number of UserRoleBridges
     * const count = await prisma.userRoleBridge.count({
     *   where: {
     *     // ... the filter for the UserRoleBridges we want to count
     *   }
     * })
    **/
    count<T extends UserRoleBridgeCountArgs>(args?: Prisma.Subset<T, UserRoleBridgeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserRoleBridgeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a UserRoleBridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleBridgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleBridgeAggregateArgs>(args: Prisma.Subset<T, UserRoleBridgeAggregateArgs>): Prisma.PrismaPromise<GetUserRoleBridgeAggregateType<T>>;
    /**
     * Group by UserRoleBridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleBridgeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends UserRoleBridgeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserRoleBridgeGroupByArgs['orderBy'];
    } : {
        orderBy?: UserRoleBridgeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserRoleBridgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleBridgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserRoleBridge model
     */
    readonly fields: UserRoleBridgeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for UserRoleBridge.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserRoleBridgeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    roles<T extends Prisma.RolesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RolesDefaultArgs<ExtArgs>>): Prisma.Prisma__RolesClient<runtime.Types.Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the UserRoleBridge model
 */
export interface UserRoleBridgeFieldRefs {
    readonly description: Prisma.FieldRef<"UserRoleBridge", 'String'>;
    readonly username: Prisma.FieldRef<"UserRoleBridge", 'String'>;
}
/**
 * UserRoleBridge findUnique
 */
export type UserRoleBridgeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleBridge
     */
    select?: Prisma.UserRoleBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRoleBridge
     */
    omit?: Prisma.UserRoleBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRoleBridgeInclude<ExtArgs> | null;
    /**
     * Filter, which UserRoleBridge to fetch.
     */
    where: Prisma.UserRoleBridgeWhereUniqueInput;
};
/**
 * UserRoleBridge findUniqueOrThrow
 */
export type UserRoleBridgeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleBridge
     */
    select?: Prisma.UserRoleBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRoleBridge
     */
    omit?: Prisma.UserRoleBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRoleBridgeInclude<ExtArgs> | null;
    /**
     * Filter, which UserRoleBridge to fetch.
     */
    where: Prisma.UserRoleBridgeWhereUniqueInput;
};
/**
 * UserRoleBridge findFirst
 */
export type UserRoleBridgeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleBridge
     */
    select?: Prisma.UserRoleBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRoleBridge
     */
    omit?: Prisma.UserRoleBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRoleBridgeInclude<ExtArgs> | null;
    /**
     * Filter, which UserRoleBridge to fetch.
     */
    where?: Prisma.UserRoleBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserRoleBridges to fetch.
     */
    orderBy?: Prisma.UserRoleBridgeOrderByWithRelationInput | Prisma.UserRoleBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserRoleBridges.
     */
    cursor?: Prisma.UserRoleBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserRoleBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserRoleBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserRoleBridges.
     */
    distinct?: Prisma.UserRoleBridgeScalarFieldEnum | Prisma.UserRoleBridgeScalarFieldEnum[];
};
/**
 * UserRoleBridge findFirstOrThrow
 */
export type UserRoleBridgeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleBridge
     */
    select?: Prisma.UserRoleBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRoleBridge
     */
    omit?: Prisma.UserRoleBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRoleBridgeInclude<ExtArgs> | null;
    /**
     * Filter, which UserRoleBridge to fetch.
     */
    where?: Prisma.UserRoleBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserRoleBridges to fetch.
     */
    orderBy?: Prisma.UserRoleBridgeOrderByWithRelationInput | Prisma.UserRoleBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserRoleBridges.
     */
    cursor?: Prisma.UserRoleBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserRoleBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserRoleBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserRoleBridges.
     */
    distinct?: Prisma.UserRoleBridgeScalarFieldEnum | Prisma.UserRoleBridgeScalarFieldEnum[];
};
/**
 * UserRoleBridge findMany
 */
export type UserRoleBridgeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleBridge
     */
    select?: Prisma.UserRoleBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRoleBridge
     */
    omit?: Prisma.UserRoleBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRoleBridgeInclude<ExtArgs> | null;
    /**
     * Filter, which UserRoleBridges to fetch.
     */
    where?: Prisma.UserRoleBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserRoleBridges to fetch.
     */
    orderBy?: Prisma.UserRoleBridgeOrderByWithRelationInput | Prisma.UserRoleBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserRoleBridges.
     */
    cursor?: Prisma.UserRoleBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserRoleBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserRoleBridges.
     */
    skip?: number;
    distinct?: Prisma.UserRoleBridgeScalarFieldEnum | Prisma.UserRoleBridgeScalarFieldEnum[];
};
/**
 * UserRoleBridge create
 */
export type UserRoleBridgeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleBridge
     */
    select?: Prisma.UserRoleBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRoleBridge
     */
    omit?: Prisma.UserRoleBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRoleBridgeInclude<ExtArgs> | null;
    /**
     * The data needed to create a UserRoleBridge.
     */
    data: Prisma.XOR<Prisma.UserRoleBridgeCreateInput, Prisma.UserRoleBridgeUncheckedCreateInput>;
};
/**
 * UserRoleBridge createMany
 */
export type UserRoleBridgeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoleBridges.
     */
    data: Prisma.UserRoleBridgeCreateManyInput | Prisma.UserRoleBridgeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * UserRoleBridge createManyAndReturn
 */
export type UserRoleBridgeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleBridge
     */
    select?: Prisma.UserRoleBridgeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRoleBridge
     */
    omit?: Prisma.UserRoleBridgeOmit<ExtArgs> | null;
    /**
     * The data used to create many UserRoleBridges.
     */
    data: Prisma.UserRoleBridgeCreateManyInput | Prisma.UserRoleBridgeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRoleBridgeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * UserRoleBridge update
 */
export type UserRoleBridgeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleBridge
     */
    select?: Prisma.UserRoleBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRoleBridge
     */
    omit?: Prisma.UserRoleBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRoleBridgeInclude<ExtArgs> | null;
    /**
     * The data needed to update a UserRoleBridge.
     */
    data: Prisma.XOR<Prisma.UserRoleBridgeUpdateInput, Prisma.UserRoleBridgeUncheckedUpdateInput>;
    /**
     * Choose, which UserRoleBridge to update.
     */
    where: Prisma.UserRoleBridgeWhereUniqueInput;
};
/**
 * UserRoleBridge updateMany
 */
export type UserRoleBridgeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoleBridges.
     */
    data: Prisma.XOR<Prisma.UserRoleBridgeUpdateManyMutationInput, Prisma.UserRoleBridgeUncheckedUpdateManyInput>;
    /**
     * Filter which UserRoleBridges to update
     */
    where?: Prisma.UserRoleBridgeWhereInput;
    /**
     * Limit how many UserRoleBridges to update.
     */
    limit?: number;
};
/**
 * UserRoleBridge updateManyAndReturn
 */
export type UserRoleBridgeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleBridge
     */
    select?: Prisma.UserRoleBridgeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRoleBridge
     */
    omit?: Prisma.UserRoleBridgeOmit<ExtArgs> | null;
    /**
     * The data used to update UserRoleBridges.
     */
    data: Prisma.XOR<Prisma.UserRoleBridgeUpdateManyMutationInput, Prisma.UserRoleBridgeUncheckedUpdateManyInput>;
    /**
     * Filter which UserRoleBridges to update
     */
    where?: Prisma.UserRoleBridgeWhereInput;
    /**
     * Limit how many UserRoleBridges to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRoleBridgeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * UserRoleBridge upsert
 */
export type UserRoleBridgeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleBridge
     */
    select?: Prisma.UserRoleBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRoleBridge
     */
    omit?: Prisma.UserRoleBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRoleBridgeInclude<ExtArgs> | null;
    /**
     * The filter to search for the UserRoleBridge to update in case it exists.
     */
    where: Prisma.UserRoleBridgeWhereUniqueInput;
    /**
     * In case the UserRoleBridge found by the `where` argument doesn't exist, create a new UserRoleBridge with this data.
     */
    create: Prisma.XOR<Prisma.UserRoleBridgeCreateInput, Prisma.UserRoleBridgeUncheckedCreateInput>;
    /**
     * In case the UserRoleBridge was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserRoleBridgeUpdateInput, Prisma.UserRoleBridgeUncheckedUpdateInput>;
};
/**
 * UserRoleBridge delete
 */
export type UserRoleBridgeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleBridge
     */
    select?: Prisma.UserRoleBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRoleBridge
     */
    omit?: Prisma.UserRoleBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRoleBridgeInclude<ExtArgs> | null;
    /**
     * Filter which UserRoleBridge to delete.
     */
    where: Prisma.UserRoleBridgeWhereUniqueInput;
};
/**
 * UserRoleBridge deleteMany
 */
export type UserRoleBridgeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoleBridges to delete
     */
    where?: Prisma.UserRoleBridgeWhereInput;
    /**
     * Limit how many UserRoleBridges to delete.
     */
    limit?: number;
};
/**
 * UserRoleBridge without action
 */
export type UserRoleBridgeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleBridge
     */
    select?: Prisma.UserRoleBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRoleBridge
     */
    omit?: Prisma.UserRoleBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRoleBridgeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=UserRoleBridge.d.ts.map