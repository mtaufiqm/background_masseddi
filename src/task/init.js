"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var whatsapp_web_js_1 = require("whatsapp-web.js");
var qrcode = require("qrcode");
var dotenv_1 = require("dotenv");
var client_1 = require("../generated/prisma/client");
var prismaAdapter = require("@prisma/adapter-pg");
var pgDriver = require("pg");
var cron_1 = require("cron");
var haripenting_service_1 = require("../service/haripenting_service");
var jadwalpst_service_1 = require("../service/jadwalpst_service");
var datetime_helper_1 = require("../helper/datetime_helper");
(0, dotenv_1.configDotenv)({ override: true, path: ["../../background_masseddi/.env", ".env"] });
var isWindows = (process.platform === "win32") ? true : false;
var adminNumber = "6289685183895";
var isTaskActive = false;
var ManageBackground = /** @class */ (function () {
    function ManageBackground() {
    }
    ManageBackground.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dbClient_1, waClient_1, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, ManageBackground.initDbClient()];
                    case 1:
                        dbClient_1 = _a.sent();
                        return [4 /*yield*/, ManageBackground.setWhatsappClient()];
                    case 2:
                        waClient_1 = _a.sent();
                        //add event listener when ready
                        waClient_1.on("ready", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.info("ready to use..");
                                        return [4 /*yield*/, this.startFirstTaskCronJob(dbClient_1, waClient_1)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        waClient_1.on("disconnected", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                console.info("Disconnected");
                                return [2 /*return*/];
                            });
                        }); });
                        return [4 /*yield*/, waClient_1.initialize()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.info("Error Occurred When Initialized :\n ".concat(err_1));
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ManageBackground.startFirstTaskCronJob = function (dbClient, waClient) {
        return __awaiter(this, void 0, void 0, function () {
            var cronTask;
            return __generator(this, function (_a) {
                console.info("Start First Task Cron Job..");
                cronTask = new cron_1.CronJob("0 45 7 * * *", function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var listHariLibur, result, formattedCurrentDate, resultSendMessage, message_1, sendResult, message_2, sendResult, message_3, sendResult, message, sendResultAdmin, err_2;
                        var _a, _b, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    _d.trys.push([0, 10, , 11]);
                                    return [4 /*yield*/, haripenting_service_1.HariPentingService.readAllDateByLiburStatus(dbClient, true)];
                                case 1:
                                    listHariLibur = _d.sent();
                                    return [4 /*yield*/, jadwalpst_service_1.JadwalPstService.getTodayJadwal(dbClient)];
                                case 2:
                                    result = _d.sent();
                                    console.info("There is Jadwal ".concat(result.start_date, " - ").concat(result.end_date));
                                    formattedCurrentDate = datetime_helper_1.DateTimeHelper.getCurrentLocalTimeWithFormat("YYYYMMDD");
                                    //if today is hari_libur, skip notification
                                    if (listHariLibur.includes(formattedCurrentDate)) {
                                        return [2 /*return*/];
                                    }
                                    resultSendMessage = {
                                        pst: false,
                                        mpp1: false,
                                        mpp2: false
                                    };
                                    if (!result.pst_petugas_nohp) return [3 /*break*/, 4];
                                    message_1 = "*PST Reminder*\n\nHalo _*".concat(result.pst_petugas_name, "*_, Minggu ini kamu bertugas sebagai petugas Pelayanan Statistik Terpadu *(PST)*!,\nSehat Selalu Ya! \n\n_Pesan ini merupakan pesan otomatis, tidak untuk dibalas!_\nMade With \u2764\uFE0F BPS Kabupaten Luwu\n");
                                    return [4 /*yield*/, ManageBackground.sendMessage(waClient, (_a = result.pst_petugas_nohp) !== null && _a !== void 0 ? _a : "", message_1)];
                                case 3:
                                    sendResult = _d.sent();
                                    resultSendMessage.pst = sendResult;
                                    _d.label = 4;
                                case 4:
                                    if (!result.mpp1_petugas_nohp) return [3 /*break*/, 6];
                                    message_2 = "*MPP Reminder*\n\nHalo _*".concat(result.mpp1_petugas_name, "*_, minggu ini kamu dan ").concat(result.mpp2_petugas_name, " bertugas sebagai petugas Pelayanan di Mall Pelayanan Publik *(MPP)* Kabupaten Luwu, \nSehat Selalu Ya! \n\n_Pesan ini merupakan pesan otomatis, tidak untuk dibalas!_\nMade With \u2764\uFE0F BPS Kabupaten Luwu\n");
                                    return [4 /*yield*/, ManageBackground.sendMessage(waClient, (_b = result.mpp1_petugas_nohp) !== null && _b !== void 0 ? _b : "", message_2)];
                                case 5:
                                    sendResult = _d.sent();
                                    resultSendMessage.mpp1 = sendResult;
                                    _d.label = 6;
                                case 6:
                                    if (!result.mpp2_petugas_nohp) return [3 /*break*/, 8];
                                    message_3 = "*MPP Reminder*\n\nHalo _*".concat(result.mpp2_petugas_name, "*_, minggu ini kamu dan ").concat(result.mpp1_petugas_name, " bertugas sebagai petugas Pelayanan di Mall Pelayanan Publik *(MPP)* Kabupaten Luwu, \nSehat Selalu Ya! \n\n_Pesan ini merupakan pesan otomatis, tidak untuk dibalas!_\nMade With \u2764\uFE0F BPS Kabupaten Luwu\n");
                                    return [4 /*yield*/, ManageBackground.sendMessage(waClient, (_c = result.mpp2_petugas_nohp) !== null && _c !== void 0 ? _c : "", message_3)];
                                case 7:
                                    sendResult = _d.sent();
                                    resultSendMessage.mpp2 = sendResult;
                                    _d.label = 8;
                                case 8:
                                    message = "STATUS PENGIRIMAN PST REMINDER\n".concat(JSON.stringify(resultSendMessage), "\n");
                                    return [4 /*yield*/, ManageBackground.sendMessage(waClient, adminNumber, message)];
                                case 9:
                                    sendResultAdmin = _d.sent();
                                    return [3 /*break*/, 11];
                                case 10:
                                    err_2 = _d.sent();
                                    console.info("Error ".concat(err_2));
                                    return [3 /*break*/, 11];
                                case 11: return [2 /*return*/];
                            }
                        });
                    });
                }, null, true, "Asia/Makassar");
                return [2 /*return*/];
            });
        });
    };
    ManageBackground.initDbClient = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pgAdapter, dbClient;
            return __generator(this, function (_a) {
                console.info("Init DB Client");
                pgAdapter = new prismaAdapter.PrismaPg(new pgDriver.Pool({
                    connectionString: process.env.POSTGRESQL_URL
                }));
                dbClient = new client_1.PrismaClient({
                    adapter: pgAdapter
                });
                return [2 /*return*/, dbClient];
            });
        });
    };
    ManageBackground.setWhatsappClient = function () {
        return __awaiter(this, void 0, void 0, function () {
            var whatsappClient;
            var _this = this;
            return __generator(this, function (_a) {
                whatsappClient = new whatsapp_web_js_1.default.Client({
                    authStrategy: new whatsapp_web_js_1.LocalAuth({
                        dataPath: isWindows ? "./whatsapp" : "/opt/whatsapp"
                    }),
                    puppeteer: {
                        args: [
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ],
                        headless: true
                    }
                });
                whatsappClient.on("qr", function (input) { return __awaiter(_this, void 0, void 0, function () {
                    var strQr;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.info("============== SCAN QR CODE BELOW ==================");
                                return [4 /*yield*/, qrcode.toString(input)];
                            case 1:
                                strQr = _a.sent();
                                console.info(strQr);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, whatsappClient];
            });
        });
    };
    ManageBackground.sendMessage = function (waClient, phoneNumber, message) {
        return __awaiter(this, void 0, void 0, function () {
            var myNumber, result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, waClient.getNumberId(phoneNumber)];
                    case 1:
                        myNumber = _a.sent();
                        if (!myNumber) {
                            throw new Error("Number Invalid");
                        }
                        return [4 /*yield*/, waClient.sendMessage(myNumber._serialized, message)];
                    case 2:
                        result = _a.sent();
                        console.info("Sukses Mengirim Pesan ke ".concat(phoneNumber));
                        return [2 /*return*/, true];
                    case 3:
                        err_3 = _a.sent();
                        console.info("Gagal Mengirim Pesan ke ".concat(phoneNumber, " : ").concat(err_3));
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ManageBackground;
}());
ManageBackground.init();
