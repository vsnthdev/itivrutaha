"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var loggerClass_1 = __importDefault(require("./loggerClass"));
function createNewLogger(loggerConfig) {
    console.log("passed logger config: " + JSON.stringify(loggerConfig, null, 4));
    return new loggerClass_1.default(loggerConfig);
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