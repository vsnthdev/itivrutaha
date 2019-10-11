"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerClass = (function () {
    function LoggerClass(loggerConfig) {
        console.log('Logger Class Initialized');
        console.log("Passed Configuration is " + JSON.stringify(loggerConfig, null, 4));
    }
    LoggerClass.prototype.info = function () {
        console.log('log an information message');
    };
    return LoggerClass;
}());
exports.default = LoggerClass;
//# sourceMappingURL=loggerClass.js.map