"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var config_1 = require("./config");
var loggerClass_1 = __importDefault(require("./loggerClass"));
var defaultConfig = {
    colored: true,
    boldType: true,
    typeCase: config_1.typeCase.lower,
    theme: ':type :message',
    verboseIdentifier: ['--verbose', '-v']
};
function createNewLogger(loggerConfig) {
    if (loggerConfig) {
        for (var obj in defaultConfig) {
            if (loggerConfig[obj] === undefined) {
                loggerConfig[obj] = defaultConfig[obj];
            }
        }
        return new loggerClass_1.default(loggerConfig);
    }
    else {
        return new loggerClass_1.default(defaultConfig);
    }
}
function addCustomType(logString, classToAdd) {
    var newlyAddedFunc = function (message) {
        console.log('Triggered the newly added function');
        console.log(message);
    };
    classToAdd[logString] = newlyAddedFunc;
}
module.exports = {
    createNewLogger: createNewLogger,
    addCustomType: addCustomType
};
//# sourceMappingURL=itivrutaha.js.map