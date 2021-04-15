import readPkg from 'read-pkg-up';
import { Logger } from './class/index.js';
import { typeCase } from './config.js';
const defaults = {
    colored: true,
    boldType: true,
    typeCase: typeCase.lower,
    theme: ':emoji :type :message',
    verboseIdentifier: ['--verbose', '-v'],
    timeFormat: 'HH:mm:ss dd-LL-yyyy',
    bootLog: true,
};
const createNewLogger = (config = defaults) => {
    config = Object.assign(Object.assign({}, defaults), config);
    if (!config.appName)
        config.appName = readPkg.sync().pkg.name;
    return new Logger(config);
};
export default {
    createNewLogger: createNewLogger,
};
