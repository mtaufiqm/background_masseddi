"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeHelper = void 0;
var dotenv_1 = require("dotenv");
var moment_timezone_1 = require("moment-timezone");
(0, dotenv_1.configDotenv)({ override: true, path: ["../../background_masseddi/.env", ".env"] });
var DateTimeHelper = /** @class */ (function () {
    function DateTimeHelper() {
    }
    DateTimeHelper.getCurrentLocalTimeObj = function () {
        return (0, moment_timezone_1.default)().tz(DateTimeHelper.timeZone).toDate();
    };
    DateTimeHelper.getCurrentLocalTime = function () {
        return (0, moment_timezone_1.default)().tz(DateTimeHelper.timeZone).format();
    };
    DateTimeHelper.getCurrentLocalTimeWithFormat = function (format) {
        return (0, moment_timezone_1.default)().tz(DateTimeHelper.timeZone).format(format);
    };
    DateTimeHelper.getCurrentYear = function () {
        return (0, moment_timezone_1.default)().tz(DateTimeHelper.timeZone).get("year");
    };
    DateTimeHelper.getCurrentMonth = function () {
        return (0, moment_timezone_1.default)().tz(DateTimeHelper.timeZone).get("month");
    };
    DateTimeHelper.getCurrentDayOfMonth = function () {
        return (0, moment_timezone_1.default)().tz(DateTimeHelper.timeZone).get("date");
    };
    DateTimeHelper.timeZone = process.env.TZ;
    return DateTimeHelper;
}());
exports.DateTimeHelper = DateTimeHelper;
