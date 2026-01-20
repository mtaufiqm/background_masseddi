import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.2.0
 * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly Roles: "Roles";
    readonly UserRoleBridge: "UserRoleBridge";
    readonly UserLog: "UserLog";
    readonly Pegawai: "Pegawai";
    readonly StatusPegawai: "StatusPegawai";
    readonly Mitra: "Mitra";
    readonly KegiatanMode: "KegiatanMode";
    readonly KegiatanStatus: "KegiatanStatus";
    readonly Kegiatan: "Kegiatan";
    readonly KegiatanMitraBridge: "KegiatanMitraBridge";
    readonly KegiatanMitraPenugasan: "KegiatanMitraPenugasan";
    readonly PenugasanStatus: "PenugasanStatus";
    readonly PenugasanGroupType: "PenugasanGroupType";
    readonly PenugasanHistory: "PenugasanHistory";
    readonly PenugasanPhoto: "PenugasanPhoto";
    readonly JadwalPst: "JadwalPst";
    readonly HariPenting: "HariPenting";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "roles" | "userRoleBridge" | "userLog" | "pegawai" | "statusPegawai" | "mitra" | "kegiatanMode" | "kegiatanStatus" | "kegiatan" | "kegiatanMitraBridge" | "kegiatanMitraPenugasan" | "penugasanStatus" | "penugasanGroupType" | "penugasanHistory" | "penugasanPhoto" | "jadwalPst" | "hariPenting";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Roles: {
            payload: Prisma.$RolesPayload<ExtArgs>;
            fields: Prisma.RolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                findFirst: {
                    args: Prisma.RolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                findMany: {
                    args: Prisma.RolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>[];
                };
                create: {
                    args: Prisma.RolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                createMany: {
                    args: Prisma.RolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RolesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>[];
                };
                delete: {
                    args: Prisma.RolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                update: {
                    args: Prisma.RolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                deleteMany: {
                    args: Prisma.RolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RolesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>[];
                };
                upsert: {
                    args: Prisma.RolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                aggregate: {
                    args: Prisma.RolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoles>;
                };
                groupBy: {
                    args: Prisma.RolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesCountAggregateOutputType> | number;
                };
            };
        };
        UserRoleBridge: {
            payload: Prisma.$UserRoleBridgePayload<ExtArgs>;
            fields: Prisma.UserRoleBridgeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserRoleBridgeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserRoleBridgeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                findFirst: {
                    args: Prisma.UserRoleBridgeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserRoleBridgeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                findMany: {
                    args: Prisma.UserRoleBridgeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>[];
                };
                create: {
                    args: Prisma.UserRoleBridgeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                createMany: {
                    args: Prisma.UserRoleBridgeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserRoleBridgeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>[];
                };
                delete: {
                    args: Prisma.UserRoleBridgeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                update: {
                    args: Prisma.UserRoleBridgeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                deleteMany: {
                    args: Prisma.UserRoleBridgeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserRoleBridgeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserRoleBridgeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>[];
                };
                upsert: {
                    args: Prisma.UserRoleBridgeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                aggregate: {
                    args: Prisma.UserRoleBridgeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserRoleBridge>;
                };
                groupBy: {
                    args: Prisma.UserRoleBridgeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserRoleBridgeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserRoleBridgeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserRoleBridgeCountAggregateOutputType> | number;
                };
            };
        };
        UserLog: {
            payload: Prisma.$UserLogPayload<ExtArgs>;
            fields: Prisma.UserLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLogPayload>;
                };
                findFirst: {
                    args: Prisma.UserLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLogPayload>;
                };
                findMany: {
                    args: Prisma.UserLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLogPayload>[];
                };
                create: {
                    args: Prisma.UserLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLogPayload>;
                };
                createMany: {
                    args: Prisma.UserLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLogPayload>[];
                };
                delete: {
                    args: Prisma.UserLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLogPayload>;
                };
                update: {
                    args: Prisma.UserLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLogPayload>;
                };
                deleteMany: {
                    args: Prisma.UserLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLogPayload>[];
                };
                upsert: {
                    args: Prisma.UserLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLogPayload>;
                };
                aggregate: {
                    args: Prisma.UserLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserLog>;
                };
                groupBy: {
                    args: Prisma.UserLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserLogCountAggregateOutputType> | number;
                };
            };
        };
        Pegawai: {
            payload: Prisma.$PegawaiPayload<ExtArgs>;
            fields: Prisma.PegawaiFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PegawaiFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PegawaiFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                findFirst: {
                    args: Prisma.PegawaiFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PegawaiFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                findMany: {
                    args: Prisma.PegawaiFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>[];
                };
                create: {
                    args: Prisma.PegawaiCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                createMany: {
                    args: Prisma.PegawaiCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PegawaiCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>[];
                };
                delete: {
                    args: Prisma.PegawaiDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                update: {
                    args: Prisma.PegawaiUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                deleteMany: {
                    args: Prisma.PegawaiDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PegawaiUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PegawaiUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>[];
                };
                upsert: {
                    args: Prisma.PegawaiUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                aggregate: {
                    args: Prisma.PegawaiAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePegawai>;
                };
                groupBy: {
                    args: Prisma.PegawaiGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PegawaiGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PegawaiCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PegawaiCountAggregateOutputType> | number;
                };
            };
        };
        StatusPegawai: {
            payload: Prisma.$StatusPegawaiPayload<ExtArgs>;
            fields: Prisma.StatusPegawaiFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StatusPegawaiFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StatusPegawaiFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                findFirst: {
                    args: Prisma.StatusPegawaiFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StatusPegawaiFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                findMany: {
                    args: Prisma.StatusPegawaiFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>[];
                };
                create: {
                    args: Prisma.StatusPegawaiCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                createMany: {
                    args: Prisma.StatusPegawaiCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StatusPegawaiCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>[];
                };
                delete: {
                    args: Prisma.StatusPegawaiDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                update: {
                    args: Prisma.StatusPegawaiUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                deleteMany: {
                    args: Prisma.StatusPegawaiDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StatusPegawaiUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StatusPegawaiUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>[];
                };
                upsert: {
                    args: Prisma.StatusPegawaiUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                aggregate: {
                    args: Prisma.StatusPegawaiAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStatusPegawai>;
                };
                groupBy: {
                    args: Prisma.StatusPegawaiGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StatusPegawaiGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StatusPegawaiCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StatusPegawaiCountAggregateOutputType> | number;
                };
            };
        };
        Mitra: {
            payload: Prisma.$MitraPayload<ExtArgs>;
            fields: Prisma.MitraFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MitraFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MitraPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MitraFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MitraPayload>;
                };
                findFirst: {
                    args: Prisma.MitraFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MitraPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MitraFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MitraPayload>;
                };
                findMany: {
                    args: Prisma.MitraFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MitraPayload>[];
                };
                create: {
                    args: Prisma.MitraCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MitraPayload>;
                };
                createMany: {
                    args: Prisma.MitraCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MitraCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MitraPayload>[];
                };
                delete: {
                    args: Prisma.MitraDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MitraPayload>;
                };
                update: {
                    args: Prisma.MitraUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MitraPayload>;
                };
                deleteMany: {
                    args: Prisma.MitraDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MitraUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MitraUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MitraPayload>[];
                };
                upsert: {
                    args: Prisma.MitraUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MitraPayload>;
                };
                aggregate: {
                    args: Prisma.MitraAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMitra>;
                };
                groupBy: {
                    args: Prisma.MitraGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MitraGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MitraCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MitraCountAggregateOutputType> | number;
                };
            };
        };
        KegiatanMode: {
            payload: Prisma.$KegiatanModePayload<ExtArgs>;
            fields: Prisma.KegiatanModeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.KegiatanModeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanModePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.KegiatanModeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanModePayload>;
                };
                findFirst: {
                    args: Prisma.KegiatanModeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanModePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.KegiatanModeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanModePayload>;
                };
                findMany: {
                    args: Prisma.KegiatanModeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanModePayload>[];
                };
                create: {
                    args: Prisma.KegiatanModeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanModePayload>;
                };
                createMany: {
                    args: Prisma.KegiatanModeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.KegiatanModeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanModePayload>[];
                };
                delete: {
                    args: Prisma.KegiatanModeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanModePayload>;
                };
                update: {
                    args: Prisma.KegiatanModeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanModePayload>;
                };
                deleteMany: {
                    args: Prisma.KegiatanModeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.KegiatanModeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.KegiatanModeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanModePayload>[];
                };
                upsert: {
                    args: Prisma.KegiatanModeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanModePayload>;
                };
                aggregate: {
                    args: Prisma.KegiatanModeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateKegiatanMode>;
                };
                groupBy: {
                    args: Prisma.KegiatanModeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KegiatanModeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.KegiatanModeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KegiatanModeCountAggregateOutputType> | number;
                };
            };
        };
        KegiatanStatus: {
            payload: Prisma.$KegiatanStatusPayload<ExtArgs>;
            fields: Prisma.KegiatanStatusFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.KegiatanStatusFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanStatusPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.KegiatanStatusFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanStatusPayload>;
                };
                findFirst: {
                    args: Prisma.KegiatanStatusFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanStatusPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.KegiatanStatusFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanStatusPayload>;
                };
                findMany: {
                    args: Prisma.KegiatanStatusFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanStatusPayload>[];
                };
                create: {
                    args: Prisma.KegiatanStatusCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanStatusPayload>;
                };
                createMany: {
                    args: Prisma.KegiatanStatusCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.KegiatanStatusCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanStatusPayload>[];
                };
                delete: {
                    args: Prisma.KegiatanStatusDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanStatusPayload>;
                };
                update: {
                    args: Prisma.KegiatanStatusUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanStatusPayload>;
                };
                deleteMany: {
                    args: Prisma.KegiatanStatusDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.KegiatanStatusUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.KegiatanStatusUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanStatusPayload>[];
                };
                upsert: {
                    args: Prisma.KegiatanStatusUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanStatusPayload>;
                };
                aggregate: {
                    args: Prisma.KegiatanStatusAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateKegiatanStatus>;
                };
                groupBy: {
                    args: Prisma.KegiatanStatusGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KegiatanStatusGroupByOutputType>[];
                };
                count: {
                    args: Prisma.KegiatanStatusCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KegiatanStatusCountAggregateOutputType> | number;
                };
            };
        };
        Kegiatan: {
            payload: Prisma.$KegiatanPayload<ExtArgs>;
            fields: Prisma.KegiatanFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.KegiatanFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.KegiatanFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanPayload>;
                };
                findFirst: {
                    args: Prisma.KegiatanFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.KegiatanFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanPayload>;
                };
                findMany: {
                    args: Prisma.KegiatanFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanPayload>[];
                };
                create: {
                    args: Prisma.KegiatanCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanPayload>;
                };
                createMany: {
                    args: Prisma.KegiatanCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.KegiatanCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanPayload>[];
                };
                delete: {
                    args: Prisma.KegiatanDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanPayload>;
                };
                update: {
                    args: Prisma.KegiatanUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanPayload>;
                };
                deleteMany: {
                    args: Prisma.KegiatanDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.KegiatanUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.KegiatanUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanPayload>[];
                };
                upsert: {
                    args: Prisma.KegiatanUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanPayload>;
                };
                aggregate: {
                    args: Prisma.KegiatanAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateKegiatan>;
                };
                groupBy: {
                    args: Prisma.KegiatanGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KegiatanGroupByOutputType>[];
                };
                count: {
                    args: Prisma.KegiatanCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KegiatanCountAggregateOutputType> | number;
                };
            };
        };
        KegiatanMitraBridge: {
            payload: Prisma.$KegiatanMitraBridgePayload<ExtArgs>;
            fields: Prisma.KegiatanMitraBridgeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.KegiatanMitraBridgeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraBridgePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.KegiatanMitraBridgeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraBridgePayload>;
                };
                findFirst: {
                    args: Prisma.KegiatanMitraBridgeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraBridgePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.KegiatanMitraBridgeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraBridgePayload>;
                };
                findMany: {
                    args: Prisma.KegiatanMitraBridgeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraBridgePayload>[];
                };
                create: {
                    args: Prisma.KegiatanMitraBridgeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraBridgePayload>;
                };
                createMany: {
                    args: Prisma.KegiatanMitraBridgeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.KegiatanMitraBridgeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraBridgePayload>[];
                };
                delete: {
                    args: Prisma.KegiatanMitraBridgeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraBridgePayload>;
                };
                update: {
                    args: Prisma.KegiatanMitraBridgeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraBridgePayload>;
                };
                deleteMany: {
                    args: Prisma.KegiatanMitraBridgeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.KegiatanMitraBridgeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.KegiatanMitraBridgeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraBridgePayload>[];
                };
                upsert: {
                    args: Prisma.KegiatanMitraBridgeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraBridgePayload>;
                };
                aggregate: {
                    args: Prisma.KegiatanMitraBridgeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateKegiatanMitraBridge>;
                };
                groupBy: {
                    args: Prisma.KegiatanMitraBridgeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KegiatanMitraBridgeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.KegiatanMitraBridgeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KegiatanMitraBridgeCountAggregateOutputType> | number;
                };
            };
        };
        KegiatanMitraPenugasan: {
            payload: Prisma.$KegiatanMitraPenugasanPayload<ExtArgs>;
            fields: Prisma.KegiatanMitraPenugasanFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.KegiatanMitraPenugasanFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraPenugasanPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.KegiatanMitraPenugasanFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraPenugasanPayload>;
                };
                findFirst: {
                    args: Prisma.KegiatanMitraPenugasanFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraPenugasanPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.KegiatanMitraPenugasanFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraPenugasanPayload>;
                };
                findMany: {
                    args: Prisma.KegiatanMitraPenugasanFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraPenugasanPayload>[];
                };
                create: {
                    args: Prisma.KegiatanMitraPenugasanCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraPenugasanPayload>;
                };
                createMany: {
                    args: Prisma.KegiatanMitraPenugasanCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.KegiatanMitraPenugasanCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraPenugasanPayload>[];
                };
                delete: {
                    args: Prisma.KegiatanMitraPenugasanDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraPenugasanPayload>;
                };
                update: {
                    args: Prisma.KegiatanMitraPenugasanUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraPenugasanPayload>;
                };
                deleteMany: {
                    args: Prisma.KegiatanMitraPenugasanDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.KegiatanMitraPenugasanUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.KegiatanMitraPenugasanUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraPenugasanPayload>[];
                };
                upsert: {
                    args: Prisma.KegiatanMitraPenugasanUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KegiatanMitraPenugasanPayload>;
                };
                aggregate: {
                    args: Prisma.KegiatanMitraPenugasanAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateKegiatanMitraPenugasan>;
                };
                groupBy: {
                    args: Prisma.KegiatanMitraPenugasanGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KegiatanMitraPenugasanGroupByOutputType>[];
                };
                count: {
                    args: Prisma.KegiatanMitraPenugasanCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KegiatanMitraPenugasanCountAggregateOutputType> | number;
                };
            };
        };
        PenugasanStatus: {
            payload: Prisma.$PenugasanStatusPayload<ExtArgs>;
            fields: Prisma.PenugasanStatusFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PenugasanStatusFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanStatusPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PenugasanStatusFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanStatusPayload>;
                };
                findFirst: {
                    args: Prisma.PenugasanStatusFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanStatusPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PenugasanStatusFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanStatusPayload>;
                };
                findMany: {
                    args: Prisma.PenugasanStatusFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanStatusPayload>[];
                };
                create: {
                    args: Prisma.PenugasanStatusCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanStatusPayload>;
                };
                createMany: {
                    args: Prisma.PenugasanStatusCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PenugasanStatusCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanStatusPayload>[];
                };
                delete: {
                    args: Prisma.PenugasanStatusDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanStatusPayload>;
                };
                update: {
                    args: Prisma.PenugasanStatusUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanStatusPayload>;
                };
                deleteMany: {
                    args: Prisma.PenugasanStatusDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PenugasanStatusUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PenugasanStatusUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanStatusPayload>[];
                };
                upsert: {
                    args: Prisma.PenugasanStatusUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanStatusPayload>;
                };
                aggregate: {
                    args: Prisma.PenugasanStatusAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePenugasanStatus>;
                };
                groupBy: {
                    args: Prisma.PenugasanStatusGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenugasanStatusGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PenugasanStatusCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenugasanStatusCountAggregateOutputType> | number;
                };
            };
        };
        PenugasanGroupType: {
            payload: Prisma.$PenugasanGroupTypePayload<ExtArgs>;
            fields: Prisma.PenugasanGroupTypeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PenugasanGroupTypeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanGroupTypePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PenugasanGroupTypeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanGroupTypePayload>;
                };
                findFirst: {
                    args: Prisma.PenugasanGroupTypeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanGroupTypePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PenugasanGroupTypeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanGroupTypePayload>;
                };
                findMany: {
                    args: Prisma.PenugasanGroupTypeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanGroupTypePayload>[];
                };
                create: {
                    args: Prisma.PenugasanGroupTypeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanGroupTypePayload>;
                };
                createMany: {
                    args: Prisma.PenugasanGroupTypeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PenugasanGroupTypeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanGroupTypePayload>[];
                };
                delete: {
                    args: Prisma.PenugasanGroupTypeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanGroupTypePayload>;
                };
                update: {
                    args: Prisma.PenugasanGroupTypeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanGroupTypePayload>;
                };
                deleteMany: {
                    args: Prisma.PenugasanGroupTypeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PenugasanGroupTypeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PenugasanGroupTypeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanGroupTypePayload>[];
                };
                upsert: {
                    args: Prisma.PenugasanGroupTypeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanGroupTypePayload>;
                };
                aggregate: {
                    args: Prisma.PenugasanGroupTypeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePenugasanGroupType>;
                };
                groupBy: {
                    args: Prisma.PenugasanGroupTypeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenugasanGroupTypeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PenugasanGroupTypeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenugasanGroupTypeCountAggregateOutputType> | number;
                };
            };
        };
        PenugasanHistory: {
            payload: Prisma.$PenugasanHistoryPayload<ExtArgs>;
            fields: Prisma.PenugasanHistoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PenugasanHistoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanHistoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PenugasanHistoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanHistoryPayload>;
                };
                findFirst: {
                    args: Prisma.PenugasanHistoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanHistoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PenugasanHistoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanHistoryPayload>;
                };
                findMany: {
                    args: Prisma.PenugasanHistoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanHistoryPayload>[];
                };
                create: {
                    args: Prisma.PenugasanHistoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanHistoryPayload>;
                };
                createMany: {
                    args: Prisma.PenugasanHistoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PenugasanHistoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanHistoryPayload>[];
                };
                delete: {
                    args: Prisma.PenugasanHistoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanHistoryPayload>;
                };
                update: {
                    args: Prisma.PenugasanHistoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanHistoryPayload>;
                };
                deleteMany: {
                    args: Prisma.PenugasanHistoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PenugasanHistoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PenugasanHistoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanHistoryPayload>[];
                };
                upsert: {
                    args: Prisma.PenugasanHistoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanHistoryPayload>;
                };
                aggregate: {
                    args: Prisma.PenugasanHistoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePenugasanHistory>;
                };
                groupBy: {
                    args: Prisma.PenugasanHistoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenugasanHistoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PenugasanHistoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenugasanHistoryCountAggregateOutputType> | number;
                };
            };
        };
        PenugasanPhoto: {
            payload: Prisma.$PenugasanPhotoPayload<ExtArgs>;
            fields: Prisma.PenugasanPhotoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PenugasanPhotoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanPhotoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PenugasanPhotoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanPhotoPayload>;
                };
                findFirst: {
                    args: Prisma.PenugasanPhotoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanPhotoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PenugasanPhotoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanPhotoPayload>;
                };
                findMany: {
                    args: Prisma.PenugasanPhotoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanPhotoPayload>[];
                };
                create: {
                    args: Prisma.PenugasanPhotoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanPhotoPayload>;
                };
                createMany: {
                    args: Prisma.PenugasanPhotoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PenugasanPhotoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanPhotoPayload>[];
                };
                delete: {
                    args: Prisma.PenugasanPhotoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanPhotoPayload>;
                };
                update: {
                    args: Prisma.PenugasanPhotoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanPhotoPayload>;
                };
                deleteMany: {
                    args: Prisma.PenugasanPhotoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PenugasanPhotoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PenugasanPhotoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanPhotoPayload>[];
                };
                upsert: {
                    args: Prisma.PenugasanPhotoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenugasanPhotoPayload>;
                };
                aggregate: {
                    args: Prisma.PenugasanPhotoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePenugasanPhoto>;
                };
                groupBy: {
                    args: Prisma.PenugasanPhotoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenugasanPhotoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PenugasanPhotoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenugasanPhotoCountAggregateOutputType> | number;
                };
            };
        };
        JadwalPst: {
            payload: Prisma.$JadwalPstPayload<ExtArgs>;
            fields: Prisma.JadwalPstFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.JadwalPstFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JadwalPstPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.JadwalPstFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JadwalPstPayload>;
                };
                findFirst: {
                    args: Prisma.JadwalPstFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JadwalPstPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.JadwalPstFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JadwalPstPayload>;
                };
                findMany: {
                    args: Prisma.JadwalPstFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JadwalPstPayload>[];
                };
                create: {
                    args: Prisma.JadwalPstCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JadwalPstPayload>;
                };
                createMany: {
                    args: Prisma.JadwalPstCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.JadwalPstCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JadwalPstPayload>[];
                };
                delete: {
                    args: Prisma.JadwalPstDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JadwalPstPayload>;
                };
                update: {
                    args: Prisma.JadwalPstUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JadwalPstPayload>;
                };
                deleteMany: {
                    args: Prisma.JadwalPstDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.JadwalPstUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.JadwalPstUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JadwalPstPayload>[];
                };
                upsert: {
                    args: Prisma.JadwalPstUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JadwalPstPayload>;
                };
                aggregate: {
                    args: Prisma.JadwalPstAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJadwalPst>;
                };
                groupBy: {
                    args: Prisma.JadwalPstGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JadwalPstGroupByOutputType>[];
                };
                count: {
                    args: Prisma.JadwalPstCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JadwalPstCountAggregateOutputType> | number;
                };
            };
        };
        HariPenting: {
            payload: Prisma.$HariPentingPayload<ExtArgs>;
            fields: Prisma.HariPentingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HariPentingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HariPentingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HariPentingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HariPentingPayload>;
                };
                findFirst: {
                    args: Prisma.HariPentingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HariPentingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HariPentingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HariPentingPayload>;
                };
                findMany: {
                    args: Prisma.HariPentingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HariPentingPayload>[];
                };
                create: {
                    args: Prisma.HariPentingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HariPentingPayload>;
                };
                createMany: {
                    args: Prisma.HariPentingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HariPentingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HariPentingPayload>[];
                };
                delete: {
                    args: Prisma.HariPentingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HariPentingPayload>;
                };
                update: {
                    args: Prisma.HariPentingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HariPentingPayload>;
                };
                deleteMany: {
                    args: Prisma.HariPentingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HariPentingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HariPentingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HariPentingPayload>[];
                };
                upsert: {
                    args: Prisma.HariPentingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HariPentingPayload>;
                };
                aggregate: {
                    args: Prisma.HariPentingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHariPenting>;
                };
                groupBy: {
                    args: Prisma.HariPentingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HariPentingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HariPentingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HariPentingCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly username: "username";
    readonly pwd: "pwd";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RolesScalarFieldEnum: {
    readonly description: "description";
};
export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];
export declare const UserRoleBridgeScalarFieldEnum: {
    readonly description: "description";
    readonly username: "username";
};
export type UserRoleBridgeScalarFieldEnum = (typeof UserRoleBridgeScalarFieldEnum)[keyof typeof UserRoleBridgeScalarFieldEnum];
export declare const UserLogScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly username: "username";
    readonly resource: "resource";
    readonly last_access: "last_access";
};
export type UserLogScalarFieldEnum = (typeof UserLogScalarFieldEnum)[keyof typeof UserLogScalarFieldEnum];
export declare const PegawaiScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly fullname: "fullname";
    readonly fullname_with_title: "fullname_with_title";
    readonly nickname: "nickname";
    readonly date_of_birth: "date_of_birth";
    readonly city_of_birth: "city_of_birth";
    readonly nip: "nip";
    readonly old_nip: "old_nip";
    readonly age: "age";
    readonly username: "username";
    readonly status_pegawai: "status_pegawai";
    readonly phone_number: "phone_number";
};
export type PegawaiScalarFieldEnum = (typeof PegawaiScalarFieldEnum)[keyof typeof PegawaiScalarFieldEnum];
export declare const StatusPegawaiScalarFieldEnum: {
    readonly description: "description";
};
export type StatusPegawaiScalarFieldEnum = (typeof StatusPegawaiScalarFieldEnum)[keyof typeof StatusPegawaiScalarFieldEnum];
export declare const MitraScalarFieldEnum: {
    readonly mitra_id: "mitra_id";
    readonly fullname: "fullname";
    readonly nickname: "nickname";
    readonly date_of_birth: "date_of_birth";
    readonly city_of_birth: "city_of_birth";
    readonly email: "email";
    readonly username: "username";
    readonly phone_number: "phone_number";
    readonly address_code: "address_code";
    readonly address_detail: "address_detail";
};
export type MitraScalarFieldEnum = (typeof MitraScalarFieldEnum)[keyof typeof MitraScalarFieldEnum];
export declare const KegiatanModeScalarFieldEnum: {
    readonly description: "description";
};
export type KegiatanModeScalarFieldEnum = (typeof KegiatanModeScalarFieldEnum)[keyof typeof KegiatanModeScalarFieldEnum];
export declare const KegiatanStatusScalarFieldEnum: {
    readonly id: "id";
    readonly description: "description";
};
export type KegiatanStatusScalarFieldEnum = (typeof KegiatanStatusScalarFieldEnum)[keyof typeof KegiatanStatusScalarFieldEnum];
export declare const KegiatanScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly name: "name";
    readonly description: "description";
    readonly start: "start";
    readonly end: "end";
    readonly monitoring_link: "monitoring_link";
    readonly organic_involved: "organic_involved";
    readonly organic_number: "organic_number";
    readonly mitra_involved: "mitra_involved";
    readonly mitra_number: "mitra_number";
    readonly created_by: "created_by";
    readonly penanggung_jawab: "penanggung_jawab";
    readonly mode: "mode";
    readonly status: "status";
};
export type KegiatanScalarFieldEnum = (typeof KegiatanScalarFieldEnum)[keyof typeof KegiatanScalarFieldEnum];
export declare const KegiatanMitraBridgeScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly kegiatan_uuid: "kegiatan_uuid";
    readonly mitra_id: "mitra_id";
    readonly status: "status";
    readonly pengawas: "pengawas";
};
export type KegiatanMitraBridgeScalarFieldEnum = (typeof KegiatanMitraBridgeScalarFieldEnum)[keyof typeof KegiatanMitraBridgeScalarFieldEnum];
export declare const KegiatanMitraPenugasanScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly bridge_uuid: "bridge_uuid";
    readonly code: "code";
    readonly group: "group";
    readonly group_type_id: "group_type_id";
    readonly group_desc: "group_desc";
    readonly description: "description";
    readonly unit: "unit";
    readonly status: "status";
    readonly started_time: "started_time";
    readonly ended_time: "ended_time";
    readonly location_latitude: "location_latitude";
    readonly location_longitude: "location_longitude";
    readonly notes: "notes";
    readonly created_at: "created_at";
    readonly last_updated: "last_updated";
};
export type KegiatanMitraPenugasanScalarFieldEnum = (typeof KegiatanMitraPenugasanScalarFieldEnum)[keyof typeof KegiatanMitraPenugasanScalarFieldEnum];
export declare const PenugasanStatusScalarFieldEnum: {
    readonly id: "id";
    readonly description: "description";
};
export type PenugasanStatusScalarFieldEnum = (typeof PenugasanStatusScalarFieldEnum)[keyof typeof PenugasanStatusScalarFieldEnum];
export declare const PenugasanGroupTypeScalarFieldEnum: {
    readonly id: "id";
    readonly description: "description";
};
export type PenugasanGroupTypeScalarFieldEnum = (typeof PenugasanGroupTypeScalarFieldEnum)[keyof typeof PenugasanGroupTypeScalarFieldEnum];
export declare const PenugasanHistoryScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly penugasan_uuid: "penugasan_uuid";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly location_latitude: "location_latitude";
    readonly location_longitude: "location_longitude";
};
export type PenugasanHistoryScalarFieldEnum = (typeof PenugasanHistoryScalarFieldEnum)[keyof typeof PenugasanHistoryScalarFieldEnum];
export declare const PenugasanPhotoScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly kmp_uuid: "kmp_uuid";
    readonly photo1_loc: "photo1_loc";
    readonly photo1_ext: "photo1_ext";
    readonly photo2_loc: "photo2_loc";
    readonly photo2_ext: "photo2_ext";
    readonly photo3_loc: "photo3_loc";
    readonly photo3_ext: "photo3_ext";
    readonly last_updated: "last_updated";
};
export type PenugasanPhotoScalarFieldEnum = (typeof PenugasanPhotoScalarFieldEnum)[keyof typeof PenugasanPhotoScalarFieldEnum];
export declare const JadwalPstScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly start_date: "start_date";
    readonly end_date: "end_date";
    readonly pst_petugas_name: "pst_petugas_name";
    readonly pst_petugas_nohp: "pst_petugas_nohp";
    readonly pst_petugas_photo: "pst_petugas_photo";
    readonly mpp1_petugas_name: "mpp1_petugas_name";
    readonly mpp1_petugas_nohp: "mpp1_petugas_nohp";
    readonly mpp1_petugas_photo: "mpp1_petugas_photo";
    readonly mpp2_petugas_name: "mpp2_petugas_name";
    readonly mpp2_petugas_nohp: "mpp2_petugas_nohp";
    readonly mpp2_petugas_photo: "mpp2_petugas_photo";
};
export type JadwalPstScalarFieldEnum = (typeof JadwalPstScalarFieldEnum)[keyof typeof JadwalPstScalarFieldEnum];
export declare const HariPentingScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly date: "date";
    readonly description: "description";
    readonly is_libur: "is_libur";
};
export type HariPentingScalarFieldEnum = (typeof HariPentingScalarFieldEnum)[keyof typeof HariPentingScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    roles?: Prisma.RolesOmit;
    userRoleBridge?: Prisma.UserRoleBridgeOmit;
    userLog?: Prisma.UserLogOmit;
    pegawai?: Prisma.PegawaiOmit;
    statusPegawai?: Prisma.StatusPegawaiOmit;
    mitra?: Prisma.MitraOmit;
    kegiatanMode?: Prisma.KegiatanModeOmit;
    kegiatanStatus?: Prisma.KegiatanStatusOmit;
    kegiatan?: Prisma.KegiatanOmit;
    kegiatanMitraBridge?: Prisma.KegiatanMitraBridgeOmit;
    kegiatanMitraPenugasan?: Prisma.KegiatanMitraPenugasanOmit;
    penugasanStatus?: Prisma.PenugasanStatusOmit;
    penugasanGroupType?: Prisma.PenugasanGroupTypeOmit;
    penugasanHistory?: Prisma.PenugasanHistoryOmit;
    penugasanPhoto?: Prisma.PenugasanPhotoOmit;
    jadwalPst?: Prisma.JadwalPstOmit;
    hariPenting?: Prisma.HariPentingOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map