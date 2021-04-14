import { Logger } from './class/index.js';
import { typeCase } from './config.js';
const defaults = {
    colored: true,
    boldType: true,
    typeCase: typeCase.lower,
    theme: ':type :message',
    verboseIdentifier: ['--verbose', '-v'],
    timeFormat: 'HH:mm:ss dd-LL-yyyy',
};
const createNewLogger = (config = defaults) => {
    config = Object.assign(Object.assign({}, defaults), config);
    return new Logger(config);
};
export default {
    createNewLogger: createNewLogger,
};
