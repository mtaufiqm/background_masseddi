import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    username: string | null;
    pwd: string | null;
};
export type UserMaxAggregateOutputType = {
    username: string | null;
    pwd: string | null;
};
export type UserCountAggregateOutputType = {
    username: number;
    pwd: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    username?: true;
    pwd?: true;
};
export type UserMaxAggregateInputType = {
    username?: true;
    pwd?: true;
};
export type UserCountAggregateInputType = {
    username?: true;
    pwd?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    username: string;
    pwd: string;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    username?: Prisma.StringFilter<"User"> | string;
    pwd?: Prisma.StringFilter<"User"> | string;
    userRoleBridge?: Prisma.UserRoleBridgeListRelationFilter;
    userLog?: Prisma.XOR<Prisma.UserLogNullableScalarRelationFilter, Prisma.UserLogWhereInput> | null;
    pegawaiObj?: Prisma.XOR<Prisma.PegawaiNullableScalarRelationFilter, Prisma.PegawaiWhereInput> | null;
    MitraObj?: Prisma.XOR<Prisma.MitraNullableScalarRelationFilter, Prisma.MitraWhereInput> | null;
    kegiatanCreatorObj?: Prisma.KegiatanListRelationFilter;
    kegiatanPjObj?: Prisma.KegiatanListRelationFilter;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    username?: Prisma.SortOrder;
    pwd?: Prisma.SortOrder;
    userRoleBridge?: Prisma.UserRoleBridgeOrderByRelationAggregateInput;
    userLog?: Prisma.UserLogOrderByWithRelationInput;
    pegawaiObj?: Prisma.PegawaiOrderByWithRelationInput;
    MitraObj?: Prisma.MitraOrderByWithRelationInput;
    kegiatanCreatorObj?: Prisma.KegiatanOrderByRelationAggregateInput;
    kegiatanPjObj?: Prisma.KegiatanOrderByRelationAggregateInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    username?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    pwd?: Prisma.StringFilter<"User"> | string;
    userRoleBridge?: Prisma.UserRoleBridgeListRelationFilter;
    userLog?: Prisma.XOR<Prisma.UserLogNullableScalarRelationFilter, Prisma.UserLogWhereInput> | null;
    pegawaiObj?: Prisma.XOR<Prisma.PegawaiNullableScalarRelationFilter, Prisma.PegawaiWhereInput> | null;
    MitraObj?: Prisma.XOR<Prisma.MitraNullableScalarRelationFilter, Prisma.MitraWhereInput> | null;
    kegiatanCreatorObj?: Prisma.KegiatanListRelationFilter;
    kegiatanPjObj?: Prisma.KegiatanListRelationFilter;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeListRelationFilter;
}, "username">;
export type UserOrderByWithAggregationInput = {
    username?: Prisma.SortOrder;
    pwd?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    username?: Prisma.StringWithAggregatesFilter<"User"> | string;
    pwd?: Prisma.StringWithAggregatesFilter<"User"> | string;
};
export type UserCreateInput = {
    username?: string;
    pwd: string;
    userRoleBridge?: Prisma.UserRoleBridgeCreateNestedManyWithoutUserInput;
    userLog?: Prisma.UserLogCreateNestedOneWithoutUserObjInput;
    pegawaiObj?: Prisma.PegawaiCreateNestedOneWithoutUserObjInput;
    MitraObj?: Prisma.MitraCreateNestedOneWithoutUserObjInput;
    kegiatanCreatorObj?: Prisma.KegiatanCreateNestedManyWithoutCreatedByObjInput;
    kegiatanPjObj?: Prisma.KegiatanCreateNestedManyWithoutPjObjInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeCreateNestedManyWithoutPengawasObjInput;
};
export type UserUncheckedCreateInput = {
    username?: string;
    pwd: string;
    userRoleBridge?: Prisma.UserRoleBridgeUncheckedCreateNestedManyWithoutUserInput;
    userLog?: Prisma.UserLogUncheckedCreateNestedOneWithoutUserObjInput;
    pegawaiObj?: Prisma.PegawaiUncheckedCreateNestedOneWithoutUserObjInput;
    MitraObj?: Prisma.MitraUncheckedCreateNestedOneWithoutUserObjInput;
    kegiatanCreatorObj?: Prisma.KegiatanUncheckedCreateNestedManyWithoutCreatedByObjInput;
    kegiatanPjObj?: Prisma.KegiatanUncheckedCreateNestedManyWithoutPjObjInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUncheckedCreateNestedManyWithoutPengawasObjInput;
};
export type UserUpdateInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoleBridge?: Prisma.UserRoleBridgeUpdateManyWithoutUserNestedInput;
    userLog?: Prisma.UserLogUpdateOneWithoutUserObjNestedInput;
    pegawaiObj?: Prisma.PegawaiUpdateOneWithoutUserObjNestedInput;
    MitraObj?: Prisma.MitraUpdateOneWithoutUserObjNestedInput;
    kegiatanCreatorObj?: Prisma.KegiatanUpdateManyWithoutCreatedByObjNestedInput;
    kegiatanPjObj?: Prisma.KegiatanUpdateManyWithoutPjObjNestedInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUpdateManyWithoutPengawasObjNestedInput;
};
export type UserUncheckedUpdateInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoleBridge?: Prisma.UserRoleBridgeUncheckedUpdateManyWithoutUserNestedInput;
    userLog?: Prisma.UserLogUncheckedUpdateOneWithoutUserObjNestedInput;
    pegawaiObj?: Prisma.PegawaiUncheckedUpdateOneWithoutUserObjNestedInput;
    MitraObj?: Prisma.MitraUncheckedUpdateOneWithoutUserObjNestedInput;
    kegiatanCreatorObj?: Prisma.KegiatanUncheckedUpdateManyWithoutCreatedByObjNestedInput;
    kegiatanPjObj?: Prisma.KegiatanUncheckedUpdateManyWithoutPjObjNestedInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUncheckedUpdateManyWithoutPengawasObjNestedInput;
};
export type UserCreateManyInput = {
    username?: string;
    pwd: string;
};
export type UserUpdateManyMutationInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserUncheckedUpdateManyInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserCountOrderByAggregateInput = {
    username?: Prisma.SortOrder;
    pwd?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    username?: Prisma.SortOrder;
    pwd?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    username?: Prisma.SortOrder;
    pwd?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type UserCreateNestedOneWithoutUserRoleBridgeInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserRoleBridgeInput, Prisma.UserUncheckedCreateWithoutUserRoleBridgeInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserRoleBridgeInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutUserRoleBridgeNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserRoleBridgeInput, Prisma.UserUncheckedCreateWithoutUserRoleBridgeInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserRoleBridgeInput;
    upsert?: Prisma.UserUpsertWithoutUserRoleBridgeInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUserRoleBridgeInput, Prisma.UserUpdateWithoutUserRoleBridgeInput>, Prisma.UserUncheckedUpdateWithoutUserRoleBridgeInput>;
};
export type UserCreateNestedOneWithoutUserLogInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserLogInput, Prisma.UserUncheckedCreateWithoutUserLogInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserLogInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutUserLogNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserLogInput, Prisma.UserUncheckedCreateWithoutUserLogInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserLogInput;
    upsert?: Prisma.UserUpsertWithoutUserLogInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUserLogInput, Prisma.UserUpdateWithoutUserLogInput>, Prisma.UserUncheckedUpdateWithoutUserLogInput>;
};
export type UserCreateNestedOneWithoutPegawaiObjInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPegawaiObjInput, Prisma.UserUncheckedCreateWithoutPegawaiObjInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPegawaiObjInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutPegawaiObjNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPegawaiObjInput, Prisma.UserUncheckedCreateWithoutPegawaiObjInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPegawaiObjInput;
    upsert?: Prisma.UserUpsertWithoutPegawaiObjInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPegawaiObjInput, Prisma.UserUpdateWithoutPegawaiObjInput>, Prisma.UserUncheckedUpdateWithoutPegawaiObjInput>;
};
export type UserCreateNestedOneWithoutMitraObjInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMitraObjInput, Prisma.UserUncheckedCreateWithoutMitraObjInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMitraObjInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutMitraObjNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMitraObjInput, Prisma.UserUncheckedCreateWithoutMitraObjInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMitraObjInput;
    upsert?: Prisma.UserUpsertWithoutMitraObjInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMitraObjInput, Prisma.UserUpdateWithoutMitraObjInput>, Prisma.UserUncheckedUpdateWithoutMitraObjInput>;
};
export type UserCreateNestedOneWithoutKegiatanCreatorObjInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutKegiatanCreatorObjInput, Prisma.UserUncheckedCreateWithoutKegiatanCreatorObjInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutKegiatanCreatorObjInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutKegiatanPjObjInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutKegiatanPjObjInput, Prisma.UserUncheckedCreateWithoutKegiatanPjObjInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutKegiatanPjObjInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutKegiatanCreatorObjNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutKegiatanCreatorObjInput, Prisma.UserUncheckedCreateWithoutKegiatanCreatorObjInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutKegiatanCreatorObjInput;
    upsert?: Prisma.UserUpsertWithoutKegiatanCreatorObjInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutKegiatanCreatorObjInput, Prisma.UserUpdateWithoutKegiatanCreatorObjInput>, Prisma.UserUncheckedUpdateWithoutKegiatanCreatorObjInput>;
};
export type UserUpdateOneWithoutKegiatanPjObjNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutKegiatanPjObjInput, Prisma.UserUncheckedCreateWithoutKegiatanPjObjInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutKegiatanPjObjInput;
    upsert?: Prisma.UserUpsertWithoutKegiatanPjObjInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutKegiatanPjObjInput, Prisma.UserUpdateWithoutKegiatanPjObjInput>, Prisma.UserUncheckedUpdateWithoutKegiatanPjObjInput>;
};
export type UserCreateNestedOneWithoutPengawasMitraObjInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPengawasMitraObjInput, Prisma.UserUncheckedCreateWithoutPengawasMitraObjInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPengawasMitraObjInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutPengawasMitraObjNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPengawasMitraObjInput, Prisma.UserUncheckedCreateWithoutPengawasMitraObjInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPengawasMitraObjInput;
    upsert?: Prisma.UserUpsertWithoutPengawasMitraObjInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPengawasMitraObjInput, Prisma.UserUpdateWithoutPengawasMitraObjInput>, Prisma.UserUncheckedUpdateWithoutPengawasMitraObjInput>;
};
export type UserCreateWithoutUserRoleBridgeInput = {
    username?: string;
    pwd: string;
    userLog?: Prisma.UserLogCreateNestedOneWithoutUserObjInput;
    pegawaiObj?: Prisma.PegawaiCreateNestedOneWithoutUserObjInput;
    MitraObj?: Prisma.MitraCreateNestedOneWithoutUserObjInput;
    kegiatanCreatorObj?: Prisma.KegiatanCreateNestedManyWithoutCreatedByObjInput;
    kegiatanPjObj?: Prisma.KegiatanCreateNestedManyWithoutPjObjInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeCreateNestedManyWithoutPengawasObjInput;
};
export type UserUncheckedCreateWithoutUserRoleBridgeInput = {
    username?: string;
    pwd: string;
    userLog?: Prisma.UserLogUncheckedCreateNestedOneWithoutUserObjInput;
    pegawaiObj?: Prisma.PegawaiUncheckedCreateNestedOneWithoutUserObjInput;
    MitraObj?: Prisma.MitraUncheckedCreateNestedOneWithoutUserObjInput;
    kegiatanCreatorObj?: Prisma.KegiatanUncheckedCreateNestedManyWithoutCreatedByObjInput;
    kegiatanPjObj?: Prisma.KegiatanUncheckedCreateNestedManyWithoutPjObjInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUncheckedCreateNestedManyWithoutPengawasObjInput;
};
export type UserCreateOrConnectWithoutUserRoleBridgeInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserRoleBridgeInput, Prisma.UserUncheckedCreateWithoutUserRoleBridgeInput>;
};
export type UserUpsertWithoutUserRoleBridgeInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutUserRoleBridgeInput, Prisma.UserUncheckedUpdateWithoutUserRoleBridgeInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserRoleBridgeInput, Prisma.UserUncheckedCreateWithoutUserRoleBridgeInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutUserRoleBridgeInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUserRoleBridgeInput, Prisma.UserUncheckedUpdateWithoutUserRoleBridgeInput>;
};
export type UserUpdateWithoutUserRoleBridgeInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    userLog?: Prisma.UserLogUpdateOneWithoutUserObjNestedInput;
    pegawaiObj?: Prisma.PegawaiUpdateOneWithoutUserObjNestedInput;
    MitraObj?: Prisma.MitraUpdateOneWithoutUserObjNestedInput;
    kegiatanCreatorObj?: Prisma.KegiatanUpdateManyWithoutCreatedByObjNestedInput;
    kegiatanPjObj?: Prisma.KegiatanUpdateManyWithoutPjObjNestedInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUpdateManyWithoutPengawasObjNestedInput;
};
export type UserUncheckedUpdateWithoutUserRoleBridgeInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    userLog?: Prisma.UserLogUncheckedUpdateOneWithoutUserObjNestedInput;
    pegawaiObj?: Prisma.PegawaiUncheckedUpdateOneWithoutUserObjNestedInput;
    MitraObj?: Prisma.MitraUncheckedUpdateOneWithoutUserObjNestedInput;
    kegiatanCreatorObj?: Prisma.KegiatanUncheckedUpdateManyWithoutCreatedByObjNestedInput;
    kegiatanPjObj?: Prisma.KegiatanUncheckedUpdateManyWithoutPjObjNestedInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUncheckedUpdateManyWithoutPengawasObjNestedInput;
};
export type UserCreateWithoutUserLogInput = {
    username?: string;
    pwd: string;
    userRoleBridge?: Prisma.UserRoleBridgeCreateNestedManyWithoutUserInput;
    pegawaiObj?: Prisma.PegawaiCreateNestedOneWithoutUserObjInput;
    MitraObj?: Prisma.MitraCreateNestedOneWithoutUserObjInput;
    kegiatanCreatorObj?: Prisma.KegiatanCreateNestedManyWithoutCreatedByObjInput;
    kegiatanPjObj?: Prisma.KegiatanCreateNestedManyWithoutPjObjInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeCreateNestedManyWithoutPengawasObjInput;
};
export type UserUncheckedCreateWithoutUserLogInput = {
    username?: string;
    pwd: string;
    userRoleBridge?: Prisma.UserRoleBridgeUncheckedCreateNestedManyWithoutUserInput;
    pegawaiObj?: Prisma.PegawaiUncheckedCreateNestedOneWithoutUserObjInput;
    MitraObj?: Prisma.MitraUncheckedCreateNestedOneWithoutUserObjInput;
    kegiatanCreatorObj?: Prisma.KegiatanUncheckedCreateNestedManyWithoutCreatedByObjInput;
    kegiatanPjObj?: Prisma.KegiatanUncheckedCreateNestedManyWithoutPjObjInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUncheckedCreateNestedManyWithoutPengawasObjInput;
};
export type UserCreateOrConnectWithoutUserLogInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserLogInput, Prisma.UserUncheckedCreateWithoutUserLogInput>;
};
export type UserUpsertWithoutUserLogInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutUserLogInput, Prisma.UserUncheckedUpdateWithoutUserLogInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserLogInput, Prisma.UserUncheckedCreateWithoutUserLogInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutUserLogInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUserLogInput, Prisma.UserUncheckedUpdateWithoutUserLogInput>;
};
export type UserUpdateWithoutUserLogInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoleBridge?: Prisma.UserRoleBridgeUpdateManyWithoutUserNestedInput;
    pegawaiObj?: Prisma.PegawaiUpdateOneWithoutUserObjNestedInput;
    MitraObj?: Prisma.MitraUpdateOneWithoutUserObjNestedInput;
    kegiatanCreatorObj?: Prisma.KegiatanUpdateManyWithoutCreatedByObjNestedInput;
    kegiatanPjObj?: Prisma.KegiatanUpdateManyWithoutPjObjNestedInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUpdateManyWithoutPengawasObjNestedInput;
};
export type UserUncheckedUpdateWithoutUserLogInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoleBridge?: Prisma.UserRoleBridgeUncheckedUpdateManyWithoutUserNestedInput;
    pegawaiObj?: Prisma.PegawaiUncheckedUpdateOneWithoutUserObjNestedInput;
    MitraObj?: Prisma.MitraUncheckedUpdateOneWithoutUserObjNestedInput;
    kegiatanCreatorObj?: Prisma.KegiatanUncheckedUpdateManyWithoutCreatedByObjNestedInput;
    kegiatanPjObj?: Prisma.KegiatanUncheckedUpdateManyWithoutPjObjNestedInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUncheckedUpdateManyWithoutPengawasObjNestedInput;
};
export type UserCreateWithoutPegawaiObjInput = {
    username?: string;
    pwd: string;
    userRoleBridge?: Prisma.UserRoleBridgeCreateNestedManyWithoutUserInput;
    userLog?: Prisma.UserLogCreateNestedOneWithoutUserObjInput;
    MitraObj?: Prisma.MitraCreateNestedOneWithoutUserObjInput;
    kegiatanCreatorObj?: Prisma.KegiatanCreateNestedManyWithoutCreatedByObjInput;
    kegiatanPjObj?: Prisma.KegiatanCreateNestedManyWithoutPjObjInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeCreateNestedManyWithoutPengawasObjInput;
};
export type UserUncheckedCreateWithoutPegawaiObjInput = {
    username?: string;
    pwd: string;
    userRoleBridge?: Prisma.UserRoleBridgeUncheckedCreateNestedManyWithoutUserInput;
    userLog?: Prisma.UserLogUncheckedCreateNestedOneWithoutUserObjInput;
    MitraObj?: Prisma.MitraUncheckedCreateNestedOneWithoutUserObjInput;
    kegiatanCreatorObj?: Prisma.KegiatanUncheckedCreateNestedManyWithoutCreatedByObjInput;
    kegiatanPjObj?: Prisma.KegiatanUncheckedCreateNestedManyWithoutPjObjInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUncheckedCreateNestedManyWithoutPengawasObjInput;
};
export type UserCreateOrConnectWithoutPegawaiObjInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPegawaiObjInput, Prisma.UserUncheckedCreateWithoutPegawaiObjInput>;
};
export type UserUpsertWithoutPegawaiObjInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPegawaiObjInput, Prisma.UserUncheckedUpdateWithoutPegawaiObjInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPegawaiObjInput, Prisma.UserUncheckedCreateWithoutPegawaiObjInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPegawaiObjInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPegawaiObjInput, Prisma.UserUncheckedUpdateWithoutPegawaiObjInput>;
};
export type UserUpdateWithoutPegawaiObjInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoleBridge?: Prisma.UserRoleBridgeUpdateManyWithoutUserNestedInput;
    userLog?: Prisma.UserLogUpdateOneWithoutUserObjNestedInput;
    MitraObj?: Prisma.MitraUpdateOneWithoutUserObjNestedInput;
    kegiatanCreatorObj?: Prisma.KegiatanUpdateManyWithoutCreatedByObjNestedInput;
    kegiatanPjObj?: Prisma.KegiatanUpdateManyWithoutPjObjNestedInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUpdateManyWithoutPengawasObjNestedInput;
};
export type UserUncheckedUpdateWithoutPegawaiObjInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoleBridge?: Prisma.UserRoleBridgeUncheckedUpdateManyWithoutUserNestedInput;
    userLog?: Prisma.UserLogUncheckedUpdateOneWithoutUserObjNestedInput;
    MitraObj?: Prisma.MitraUncheckedUpdateOneWithoutUserObjNestedInput;
    kegiatanCreatorObj?: Prisma.KegiatanUncheckedUpdateManyWithoutCreatedByObjNestedInput;
    kegiatanPjObj?: Prisma.KegiatanUncheckedUpdateManyWithoutPjObjNestedInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUncheckedUpdateManyWithoutPengawasObjNestedInput;
};
export type UserCreateWithoutMitraObjInput = {
    username?: string;
    pwd: string;
    userRoleBridge?: Prisma.UserRoleBridgeCreateNestedManyWithoutUserInput;
    userLog?: Prisma.UserLogCreateNestedOneWithoutUserObjInput;
    pegawaiObj?: Prisma.PegawaiCreateNestedOneWithoutUserObjInput;
    kegiatanCreatorObj?: Prisma.KegiatanCreateNestedManyWithoutCreatedByObjInput;
    kegiatanPjObj?: Prisma.KegiatanCreateNestedManyWithoutPjObjInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeCreateNestedManyWithoutPengawasObjInput;
};
export type UserUncheckedCreateWithoutMitraObjInput = {
    username?: string;
    pwd: string;
    userRoleBridge?: Prisma.UserRoleBridgeUncheckedCreateNestedManyWithoutUserInput;
    userLog?: Prisma.UserLogUncheckedCreateNestedOneWithoutUserObjInput;
    pegawaiObj?: Prisma.PegawaiUncheckedCreateNestedOneWithoutUserObjInput;
    kegiatanCreatorObj?: Prisma.KegiatanUncheckedCreateNestedManyWithoutCreatedByObjInput;
    kegiatanPjObj?: Prisma.KegiatanUncheckedCreateNestedManyWithoutPjObjInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUncheckedCreateNestedManyWithoutPengawasObjInput;
};
export type UserCreateOrConnectWithoutMitraObjInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMitraObjInput, Prisma.UserUncheckedCreateWithoutMitraObjInput>;
};
export type UserUpsertWithoutMitraObjInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMitraObjInput, Prisma.UserUncheckedUpdateWithoutMitraObjInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMitraObjInput, Prisma.UserUncheckedCreateWithoutMitraObjInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMitraObjInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMitraObjInput, Prisma.UserUncheckedUpdateWithoutMitraObjInput>;
};
export type UserUpdateWithoutMitraObjInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoleBridge?: Prisma.UserRoleBridgeUpdateManyWithoutUserNestedInput;
    userLog?: Prisma.UserLogUpdateOneWithoutUserObjNestedInput;
    pegawaiObj?: Prisma.PegawaiUpdateOneWithoutUserObjNestedInput;
    kegiatanCreatorObj?: Prisma.KegiatanUpdateManyWithoutCreatedByObjNestedInput;
    kegiatanPjObj?: Prisma.KegiatanUpdateManyWithoutPjObjNestedInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUpdateManyWithoutPengawasObjNestedInput;
};
export type UserUncheckedUpdateWithoutMitraObjInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoleBridge?: Prisma.UserRoleBridgeUncheckedUpdateManyWithoutUserNestedInput;
    userLog?: Prisma.UserLogUncheckedUpdateOneWithoutUserObjNestedInput;
    pegawaiObj?: Prisma.PegawaiUncheckedUpdateOneWithoutUserObjNestedInput;
    kegiatanCreatorObj?: Prisma.KegiatanUncheckedUpdateManyWithoutCreatedByObjNestedInput;
    kegiatanPjObj?: Prisma.KegiatanUncheckedUpdateManyWithoutPjObjNestedInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUncheckedUpdateManyWithoutPengawasObjNestedInput;
};
export type UserCreateWithoutKegiatanCreatorObjInput = {
    username?: string;
    pwd: string;
    userRoleBridge?: Prisma.UserRoleBridgeCreateNestedManyWithoutUserInput;
    userLog?: Prisma.UserLogCreateNestedOneWithoutUserObjInput;
    pegawaiObj?: Prisma.PegawaiCreateNestedOneWithoutUserObjInput;
    MitraObj?: Prisma.MitraCreateNestedOneWithoutUserObjInput;
    kegiatanPjObj?: Prisma.KegiatanCreateNestedManyWithoutPjObjInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeCreateNestedManyWithoutPengawasObjInput;
};
export type UserUncheckedCreateWithoutKegiatanCreatorObjInput = {
    username?: string;
    pwd: string;
    userRoleBridge?: Prisma.UserRoleBridgeUncheckedCreateNestedManyWithoutUserInput;
    userLog?: Prisma.UserLogUncheckedCreateNestedOneWithoutUserObjInput;
    pegawaiObj?: Prisma.PegawaiUncheckedCreateNestedOneWithoutUserObjInput;
    MitraObj?: Prisma.MitraUncheckedCreateNestedOneWithoutUserObjInput;
    kegiatanPjObj?: Prisma.KegiatanUncheckedCreateNestedManyWithoutPjObjInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUncheckedCreateNestedManyWithoutPengawasObjInput;
};
export type UserCreateOrConnectWithoutKegiatanCreatorObjInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutKegiatanCreatorObjInput, Prisma.UserUncheckedCreateWithoutKegiatanCreatorObjInput>;
};
export type UserCreateWithoutKegiatanPjObjInput = {
    username?: string;
    pwd: string;
    userRoleBridge?: Prisma.UserRoleBridgeCreateNestedManyWithoutUserInput;
    userLog?: Prisma.UserLogCreateNestedOneWithoutUserObjInput;
    pegawaiObj?: Prisma.PegawaiCreateNestedOneWithoutUserObjInput;
    MitraObj?: Prisma.MitraCreateNestedOneWithoutUserObjInput;
    kegiatanCreatorObj?: Prisma.KegiatanCreateNestedManyWithoutCreatedByObjInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeCreateNestedManyWithoutPengawasObjInput;
};
export type UserUncheckedCreateWithoutKegiatanPjObjInput = {
    username?: string;
    pwd: string;
    userRoleBridge?: Prisma.UserRoleBridgeUncheckedCreateNestedManyWithoutUserInput;
    userLog?: Prisma.UserLogUncheckedCreateNestedOneWithoutUserObjInput;
    pegawaiObj?: Prisma.PegawaiUncheckedCreateNestedOneWithoutUserObjInput;
    MitraObj?: Prisma.MitraUncheckedCreateNestedOneWithoutUserObjInput;
    kegiatanCreatorObj?: Prisma.KegiatanUncheckedCreateNestedManyWithoutCreatedByObjInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUncheckedCreateNestedManyWithoutPengawasObjInput;
};
export type UserCreateOrConnectWithoutKegiatanPjObjInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutKegiatanPjObjInput, Prisma.UserUncheckedCreateWithoutKegiatanPjObjInput>;
};
export type UserUpsertWithoutKegiatanCreatorObjInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutKegiatanCreatorObjInput, Prisma.UserUncheckedUpdateWithoutKegiatanCreatorObjInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutKegiatanCreatorObjInput, Prisma.UserUncheckedCreateWithoutKegiatanCreatorObjInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutKegiatanCreatorObjInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutKegiatanCreatorObjInput, Prisma.UserUncheckedUpdateWithoutKegiatanCreatorObjInput>;
};
export type UserUpdateWithoutKegiatanCreatorObjInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoleBridge?: Prisma.UserRoleBridgeUpdateManyWithoutUserNestedInput;
    userLog?: Prisma.UserLogUpdateOneWithoutUserObjNestedInput;
    pegawaiObj?: Prisma.PegawaiUpdateOneWithoutUserObjNestedInput;
    MitraObj?: Prisma.MitraUpdateOneWithoutUserObjNestedInput;
    kegiatanPjObj?: Prisma.KegiatanUpdateManyWithoutPjObjNestedInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUpdateManyWithoutPengawasObjNestedInput;
};
export type UserUncheckedUpdateWithoutKegiatanCreatorObjInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoleBridge?: Prisma.UserRoleBridgeUncheckedUpdateManyWithoutUserNestedInput;
    userLog?: Prisma.UserLogUncheckedUpdateOneWithoutUserObjNestedInput;
    pegawaiObj?: Prisma.PegawaiUncheckedUpdateOneWithoutUserObjNestedInput;
    MitraObj?: Prisma.MitraUncheckedUpdateOneWithoutUserObjNestedInput;
    kegiatanPjObj?: Prisma.KegiatanUncheckedUpdateManyWithoutPjObjNestedInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUncheckedUpdateManyWithoutPengawasObjNestedInput;
};
export type UserUpsertWithoutKegiatanPjObjInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutKegiatanPjObjInput, Prisma.UserUncheckedUpdateWithoutKegiatanPjObjInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutKegiatanPjObjInput, Prisma.UserUncheckedCreateWithoutKegiatanPjObjInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutKegiatanPjObjInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutKegiatanPjObjInput, Prisma.UserUncheckedUpdateWithoutKegiatanPjObjInput>;
};
export type UserUpdateWithoutKegiatanPjObjInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoleBridge?: Prisma.UserRoleBridgeUpdateManyWithoutUserNestedInput;
    userLog?: Prisma.UserLogUpdateOneWithoutUserObjNestedInput;
    pegawaiObj?: Prisma.PegawaiUpdateOneWithoutUserObjNestedInput;
    MitraObj?: Prisma.MitraUpdateOneWithoutUserObjNestedInput;
    kegiatanCreatorObj?: Prisma.KegiatanUpdateManyWithoutCreatedByObjNestedInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUpdateManyWithoutPengawasObjNestedInput;
};
export type UserUncheckedUpdateWithoutKegiatanPjObjInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoleBridge?: Prisma.UserRoleBridgeUncheckedUpdateManyWithoutUserNestedInput;
    userLog?: Prisma.UserLogUncheckedUpdateOneWithoutUserObjNestedInput;
    pegawaiObj?: Prisma.PegawaiUncheckedUpdateOneWithoutUserObjNestedInput;
    MitraObj?: Prisma.MitraUncheckedUpdateOneWithoutUserObjNestedInput;
    kegiatanCreatorObj?: Prisma.KegiatanUncheckedUpdateManyWithoutCreatedByObjNestedInput;
    pengawasMitraObj?: Prisma.KegiatanMitraBridgeUncheckedUpdateManyWithoutPengawasObjNestedInput;
};
export type UserCreateWithoutPengawasMitraObjInput = {
    username?: string;
    pwd: string;
    userRoleBridge?: Prisma.UserRoleBridgeCreateNestedManyWithoutUserInput;
    userLog?: Prisma.UserLogCreateNestedOneWithoutUserObjInput;
    pegawaiObj?: Prisma.PegawaiCreateNestedOneWithoutUserObjInput;
    MitraObj?: Prisma.MitraCreateNestedOneWithoutUserObjInput;
    kegiatanCreatorObj?: Prisma.KegiatanCreateNestedManyWithoutCreatedByObjInput;
    kegiatanPjObj?: Prisma.KegiatanCreateNestedManyWithoutPjObjInput;
};
export type UserUncheckedCreateWithoutPengawasMitraObjInput = {
    username?: string;
    pwd: string;
    userRoleBridge?: Prisma.UserRoleBridgeUncheckedCreateNestedManyWithoutUserInput;
    userLog?: Prisma.UserLogUncheckedCreateNestedOneWithoutUserObjInput;
    pegawaiObj?: Prisma.PegawaiUncheckedCreateNestedOneWithoutUserObjInput;
    MitraObj?: Prisma.MitraUncheckedCreateNestedOneWithoutUserObjInput;
    kegiatanCreatorObj?: Prisma.KegiatanUncheckedCreateNestedManyWithoutCreatedByObjInput;
    kegiatanPjObj?: Prisma.KegiatanUncheckedCreateNestedManyWithoutPjObjInput;
};
export type UserCreateOrConnectWithoutPengawasMitraObjInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPengawasMitraObjInput, Prisma.UserUncheckedCreateWithoutPengawasMitraObjInput>;
};
export type UserUpsertWithoutPengawasMitraObjInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPengawasMitraObjInput, Prisma.UserUncheckedUpdateWithoutPengawasMitraObjInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPengawasMitraObjInput, Prisma.UserUncheckedCreateWithoutPengawasMitraObjInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPengawasMitraObjInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPengawasMitraObjInput, Prisma.UserUncheckedUpdateWithoutPengawasMitraObjInput>;
};
export type UserUpdateWithoutPengawasMitraObjInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoleBridge?: Prisma.UserRoleBridgeUpdateManyWithoutUserNestedInput;
    userLog?: Prisma.UserLogUpdateOneWithoutUserObjNestedInput;
    pegawaiObj?: Prisma.PegawaiUpdateOneWithoutUserObjNestedInput;
    MitraObj?: Prisma.MitraUpdateOneWithoutUserObjNestedInput;
    kegiatanCreatorObj?: Prisma.KegiatanUpdateManyWithoutCreatedByObjNestedInput;
    kegiatanPjObj?: Prisma.KegiatanUpdateManyWithoutPjObjNestedInput;
};
export type UserUncheckedUpdateWithoutPengawasMitraObjInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoleBridge?: Prisma.UserRoleBridgeUncheckedUpdateManyWithoutUserNestedInput;
    userLog?: Prisma.UserLogUncheckedUpdateOneWithoutUserObjNestedInput;
    pegawaiObj?: Prisma.PegawaiUncheckedUpdateOneWithoutUserObjNestedInput;
    MitraObj?: Prisma.MitraUncheckedUpdateOneWithoutUserObjNestedInput;
    kegiatanCreatorObj?: Prisma.KegiatanUncheckedUpdateManyWithoutCreatedByObjNestedInput;
    kegiatanPjObj?: Prisma.KegiatanUncheckedUpdateManyWithoutPjObjNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    userRoleBridge: number;
    kegiatanCreatorObj: number;
    kegiatanPjObj: number;
    pengawasMitraObj: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userRoleBridge?: boolean | UserCountOutputTypeCountUserRoleBridgeArgs;
    kegiatanCreatorObj?: boolean | UserCountOutputTypeCountKegiatanCreatorObjArgs;
    kegiatanPjObj?: boolean | UserCountOutputTypeCountKegiatanPjObjArgs;
    pengawasMitraObj?: boolean | UserCountOutputTypeCountPengawasMitraObjArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountUserRoleBridgeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserRoleBridgeWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountKegiatanCreatorObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KegiatanWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountKegiatanPjObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KegiatanWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountPengawasMitraObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KegiatanMitraBridgeWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    username?: boolean;
    pwd?: boolean;
    userRoleBridge?: boolean | Prisma.User$userRoleBridgeArgs<ExtArgs>;
    userLog?: boolean | Prisma.User$userLogArgs<ExtArgs>;
    pegawaiObj?: boolean | Prisma.User$pegawaiObjArgs<ExtArgs>;
    MitraObj?: boolean | Prisma.User$MitraObjArgs<ExtArgs>;
    kegiatanCreatorObj?: boolean | Prisma.User$kegiatanCreatorObjArgs<ExtArgs>;
    kegiatanPjObj?: boolean | Prisma.User$kegiatanPjObjArgs<ExtArgs>;
    pengawasMitraObj?: boolean | Prisma.User$pengawasMitraObjArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    username?: boolean;
    pwd?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    username?: boolean;
    pwd?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    username?: boolean;
    pwd?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"username" | "pwd", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userRoleBridge?: boolean | Prisma.User$userRoleBridgeArgs<ExtArgs>;
    userLog?: boolean | Prisma.User$userLogArgs<ExtArgs>;
    pegawaiObj?: boolean | Prisma.User$pegawaiObjArgs<ExtArgs>;
    MitraObj?: boolean | Prisma.User$MitraObjArgs<ExtArgs>;
    kegiatanCreatorObj?: boolean | Prisma.User$kegiatanCreatorObjArgs<ExtArgs>;
    kegiatanPjObj?: boolean | Prisma.User$kegiatanPjObjArgs<ExtArgs>;
    pengawasMitraObj?: boolean | Prisma.User$pengawasMitraObjArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        userRoleBridge: Prisma.$UserRoleBridgePayload<ExtArgs>[];
        userLog: Prisma.$UserLogPayload<ExtArgs> | null;
        pegawaiObj: Prisma.$PegawaiPayload<ExtArgs> | null;
        MitraObj: Prisma.$MitraPayload<ExtArgs> | null;
        kegiatanCreatorObj: Prisma.$KegiatanPayload<ExtArgs>[];
        kegiatanPjObj: Prisma.$KegiatanPayload<ExtArgs>[];
        pengawasMitraObj: Prisma.$KegiatanMitraBridgePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        username: string;
        pwd: string;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `username`
     * const userWithUsernameOnly = await prisma.user.findMany({ select: { username: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `username`
     * const userWithUsernameOnly = await prisma.user.createManyAndReturn({
     *   select: { username: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `username`
     * const userWithUsernameOnly = await prisma.user.updateManyAndReturn({
     *   select: { username: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    userRoleBridge<T extends Prisma.User$userRoleBridgeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$userRoleBridgeArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserRoleBridgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    userLog<T extends Prisma.User$userLogArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$userLogArgs<ExtArgs>>): Prisma.Prisma__UserLogClient<runtime.Types.Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    pegawaiObj<T extends Prisma.User$pegawaiObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$pegawaiObjArgs<ExtArgs>>): Prisma.Prisma__PegawaiClient<runtime.Types.Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    MitraObj<T extends Prisma.User$MitraObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$MitraObjArgs<ExtArgs>>): Prisma.Prisma__MitraClient<runtime.Types.Result.GetResult<Prisma.$MitraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    kegiatanCreatorObj<T extends Prisma.User$kegiatanCreatorObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$kegiatanCreatorObjArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    kegiatanPjObj<T extends Prisma.User$kegiatanPjObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$kegiatanPjObjArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    pengawasMitraObj<T extends Prisma.User$pengawasMitraObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$pengawasMitraObjArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KegiatanMitraBridgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly username: Prisma.FieldRef<"User", 'String'>;
    readonly pwd: Prisma.FieldRef<"User", 'String'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.userRoleBridge
 */
export type User$userRoleBridgeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.UserRoleBridgeWhereInput;
    orderBy?: Prisma.UserRoleBridgeOrderByWithRelationInput | Prisma.UserRoleBridgeOrderByWithRelationInput[];
    cursor?: Prisma.UserRoleBridgeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserRoleBridgeScalarFieldEnum | Prisma.UserRoleBridgeScalarFieldEnum[];
};
/**
 * User.userLog
 */
export type User$userLogArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: Prisma.UserLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLog
     */
    omit?: Prisma.UserLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserLogInclude<ExtArgs> | null;
    where?: Prisma.UserLogWhereInput;
};
/**
 * User.pegawaiObj
 */
export type User$pegawaiObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: Prisma.PegawaiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: Prisma.PegawaiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PegawaiInclude<ExtArgs> | null;
    where?: Prisma.PegawaiWhereInput;
};
/**
 * User.MitraObj
 */
export type User$MitraObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: Prisma.MitraSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Mitra
     */
    omit?: Prisma.MitraOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MitraInclude<ExtArgs> | null;
    where?: Prisma.MitraWhereInput;
};
/**
 * User.kegiatanCreatorObj
 */
export type User$kegiatanCreatorObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.KegiatanWhereInput;
    orderBy?: Prisma.KegiatanOrderByWithRelationInput | Prisma.KegiatanOrderByWithRelationInput[];
    cursor?: Prisma.KegiatanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KegiatanScalarFieldEnum | Prisma.KegiatanScalarFieldEnum[];
};
/**
 * User.kegiatanPjObj
 */
export type User$kegiatanPjObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.KegiatanWhereInput;
    orderBy?: Prisma.KegiatanOrderByWithRelationInput | Prisma.KegiatanOrderByWithRelationInput[];
    cursor?: Prisma.KegiatanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KegiatanScalarFieldEnum | Prisma.KegiatanScalarFieldEnum[];
};
/**
 * User.pengawasMitraObj
 */
export type User$pengawasMitraObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=User.d.ts.map