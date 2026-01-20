import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Roles
 *
 */
export type Roles = Prisma.RolesModel;
/**
 * Model UserRoleBridge
 *
 */
export type UserRoleBridge = Prisma.UserRoleBridgeModel;
/**
 * Model UserLog
 *
 */
export type UserLog = Prisma.UserLogModel;
/**
 * Model Pegawai
 *
 */
export type Pegawai = Prisma.PegawaiModel;
/**
 * Model StatusPegawai
 *
 */
export type StatusPegawai = Prisma.StatusPegawaiModel;
/**
 * Model Mitra
 *
 */
export type Mitra = Prisma.MitraModel;
/**
 * Model KegiatanMode
 *
 */
export type KegiatanMode = Prisma.KegiatanModeModel;
/**
 * Model KegiatanStatus
 *
 */
export type KegiatanStatus = Prisma.KegiatanStatusModel;
/**
 * Model Kegiatan
 *
 */
export type Kegiatan = Prisma.KegiatanModel;
/**
 * Model KegiatanMitraBridge
 *
 */
export type KegiatanMitraBridge = Prisma.KegiatanMitraBridgeModel;
/**
 * Model KegiatanMitraPenugasan
 *
 */
export type KegiatanMitraPenugasan = Prisma.KegiatanMitraPenugasanModel;
/**
 * Model PenugasanStatus
 *
 */
export type PenugasanStatus = Prisma.PenugasanStatusModel;
/**
 * Model PenugasanGroupType
 *
 */
export type PenugasanGroupType = Prisma.PenugasanGroupTypeModel;
/**
 * Model PenugasanHistory
 *
 */
export type PenugasanHistory = Prisma.PenugasanHistoryModel;
/**
 * Model PenugasanPhoto
 *
 */
export type PenugasanPhoto = Prisma.PenugasanPhotoModel;
/**
 * Model JadwalPst
 *
 */
export type JadwalPst = Prisma.JadwalPstModel;
/**
 * Model HariPenting
 *
 */
export type HariPenting = Prisma.HariPentingModel;
//# sourceMappingURL=client.d.ts.map