"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerClass = (function () {
    function LoggerClass(loggerConfig) {
        console.log('Logger Class Initialized');
        console.log("Passed Configuration is " + JSON.stringify(loggerConfig, null, 4));
    }
    LoggerClass.prototype.success = function () {
        console.log('log a success message');
    };
    LoggerClass.prototype.note = function () {
        console.log('send a note message');
    };
    LoggerClass.prototype.info = function () {
        console.log('log an information message');
    };
    LoggerClass.prototype.okay = function () {
        console.log('Log an okay message');
    };
    LoggerClass.prototype.warning = function () {
        console.log('Warn depending on the data received.');
    };
    LoggerClass.prototype.error = function () {
        console.log('Handle an error');
    };
    return LoggerClass;
}());
exports.default = LoggerClass;
//# sourceMappingURL=loggerClass.js.map