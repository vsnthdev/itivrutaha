"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = __importDefault(require("./variables/type"));
var time_1 = __importDefault(require("./variables/time"));
function renderTheme(type, message, loggerConfig) {
    return loggerConfig.theme
        .replace(':type', type_1.default(type, loggerConfig))
        .replace(':message', message)
        .replace(':time', time_1.default(loggerConfig));
}
exports.default = renderTheme;
//# sourceMappingURL=renderer.js.map