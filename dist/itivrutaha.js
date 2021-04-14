import { typeCase } from './config.js';
import { LoggerClass, validate } from './loggerClass.js';
import renderTheme from './renderer.js';
const defaultConfig = {
    colored: true,
    boldType: true,
    typeCase: typeCase.lower,
    theme: ':type :message',
    verboseIdentifier: ['--verbose', '-v'],
    timeFormat: 'HH:mm:ss dd-LL-yyyy',
};
function createNewLogger(loggerConfig) {
    if (loggerConfig) {
        for (const obj in defaultConfig) {
            if (loggerConfig[obj] === undefined) {
                loggerConfig[obj] = defaultConfig[obj];
            }
        }
        return new LoggerClass(loggerConfig);
    }
    else {
        return new LoggerClass(defaultConfig);
    }
}
function addCustomType(logString, classToAdd) {
    const newlyAddedFunc = function (message) {
        if (validate(message) == true) {
            console.log(renderTheme(logString, message, classToAdd.loggerConfig));
        }
    };
    classToAdd[logString] = newlyAddedFunc;
}
export default {
    createNewLogger: createNewLogger,
    addCustomType: addCustomType,
};
