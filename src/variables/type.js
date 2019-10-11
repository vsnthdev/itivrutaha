"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
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
            case 'warning':
                type = chalk_1.default.yellowBright(type);
                break;
            case 'error':
                type = chalk_1.default.redBright(type);
                break;
        }
    }
    return type;
}
function typeRender(type, loggerConfig) {
    var returnable = '';
    var colorized = colorize(type, loggerConfig);
    if (loggerConfig.boldType == true) {
        returnable = chalk_1.default.bold(colorized);
    }
    return returnable;
}
exports.default = typeRender;
//# sourceMappingURL=type.js.map