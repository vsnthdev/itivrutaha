"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var type_1 = __importDefault(require("./variables/type"));
var time_1 = __importDefault(require("./variables/time"));
function renderTheme(type, message, loggerConfig) {
    return loggerConfig.theme
        .replace(':type', type_1.default(type, loggerConfig))
        .replace(':message', message)
        .replace(':time', time_1.default(loggerConfig))
        .replace(':filename', path.basename(process.argv[1]))
        .replace(':node_path', process.argv[0])
        .replace(':script_path', process.argv[1])
        .replace(':node_version', process.version);
}
exports.default = renderTheme;
//# sourceMappingURL=renderer.js.map