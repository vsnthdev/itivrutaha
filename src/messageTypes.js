"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
exports.successType = {
    text: 'success',
    color: chalk_1.default.hex('#CDDC39'),
    backgroundColor: chalk_1.default.hex('#8BC34A')
};
exports.noteType = {
    text: 'note',
    color: chalk_1.default.hex('#9C27B0'),
    backgroundColor: chalk_1.default.hex('#D500F9')
};
exports.infoType = {
    text: 'info',
    color: chalk_1.default.hex('#00B0FF'),
    backgroundColor: chalk_1.default.hex('#2196F3')
};
exports.okayType = {
    text: 'okay',
    color: chalk_1.default.hex('#607D8B'),
    backgroundColor: chalk_1.default.hex('#455A64')
};
exports.verboseType = {
    text: 'verbose',
    color: chalk_1.default.hex('#009688'),
    backgroundColor: chalk_1.default.hex('#00796B')
};
exports.warningType = {
    text: 'warning',
    color: chalk_1.default.hex('#FFC107'),
    backgroundColor: chalk_1.default.hex('#FFC107')
};
exports.errorType = {
    text: 'error',
    color: chalk_1.default.hex('#F44336'),
    backgroundColor: chalk_1.default.hex('#FF1744')
};
//# sourceMappingURL=messageTypes.js.map