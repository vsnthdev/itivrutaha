import { typeCase } from './config.js';
import { LoggerClass } from './loggerClass.js';
const defaultConfig = {
    colored: true,
    boldType: true,
    typeCase: typeCase.lower,
    theme: ':type :message',
    verboseIdentifier: ['--verbose', '-v'],
    timeFormat: 'HH:mm:ss dd-LL-yyyy',
};
const createNewLogger = (loggerConfig) => {
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
};
export default {
    createNewLogger: createNewLogger,
};
