"use strict";
var config_1 = require("./config");
var loggerClass_1 = require("./loggerClass");
var defaultConfig = {
    colored: true,
    boldType: true,
    typeCase: config_1.typeCase.lower,
    theme: ':type :message',
    verboseIdentifier: ['--verbose', '-v'],
    timeFormat: 'MM:ss, dS mmm',
    invertedTypes: false
};
function createNewLogger(loggerConfig) {
    if (loggerConfig) {
        for (var obj in defaultConfig) {
            if (loggerConfig[obj] === undefined) {
                loggerConfig[obj] = defaultConfig[obj];
            }
        }
        return new loggerClass_1.LoggerClass(loggerConfig);
    }
    else {
        return new loggerClass_1.LoggerClass(defaultConfig);
    }
}
module.exports = {
    createNewLogger: createNewLogger,
};
//# sourceMappingURL=itivrutaha.js.map