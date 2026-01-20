import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
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
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
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
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map