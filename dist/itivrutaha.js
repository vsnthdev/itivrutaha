import { typeCase } from './config';
import { LoggerClass, validate } from './loggerClass';
import renderTheme from './renderer';
const defaultConfig = {
    colored: true,
    boldType: true,
    typeCase: typeCase.lower,
    theme: ':type :message',
    verboseIdentifier: ['--verbose', '-v'],
    timeFormat: 'MM:ss, dS mmm',
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
