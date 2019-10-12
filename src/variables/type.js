"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
function bold(type, loggerConfig) {
    if (loggerConfig.boldType === true) {
        return chalk_1.default.bold(type);
    }
    else {
        return type;
    }
}
function colorize(type, loggerConfig) {
    if (loggerConfig.colored == true) {
        switch (type.toLowerCase()) {
            case 'success':
                type = chalk_1.default.greenBright(type);
                break;
            case 'note':
                type = chalk_1.default.magentaBright(type);
                break;
            case 'info':
                type = chalk_1.default.blueBright(type);
                break;
            case 'okay':
                type = chalk_1.default.gray(type);
                break;
            case 'verbose':
                type = chalk_1.default.cyanBright(type);
                break;
            case 'warning':
                type = chalk_1.default.yellowBright(type);
                break;
            case 'error':
                type = chalk_1.default.redBright(type);
                break;
        }
    }
    return bold(type, loggerConfig);
}
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
function casing(type, loggerConfig) {
    switch (loggerConfig.typeCase) {
        case 0:
            return colorize(type.toUpperCase(), loggerConfig);
        case 1:
            return colorize(type.toLowerCase(), loggerConfig);
        case 2:
            return colorize(toTitleCase(type), loggerConfig);
        default:
            return colorize(type, loggerConfig);
    }
}
function typeRender(type, loggerConfig) {
    return casing(type, loggerConfig);
}
exports.default = typeRender;
//# sourceMappingURL=type.js.map