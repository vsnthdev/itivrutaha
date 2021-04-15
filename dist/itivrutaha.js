var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import merge from 'deepmerge';
import readPkg from 'read-pkg-up';
import { Logger } from './class/index.js';
import { open } from './class/log.js';
import { typeCase } from './config.js';
const defaults = {
    bootLog: true,
    shutdownLog: true,
    verboseIdentifier: ['--verbose', '-v'],
    theme: {
        typeCase: typeCase.lower,
        colored: true,
        boldType: true,
        string: ':emoji :type :message',
        timeFormat: 'HH:mm:ss dd-LL-yyyy',
    },
    logs: {
        enable: false,
        output: 'output.log',
        error: 'error.log',
    },
};
const createNewLogger = (config = defaults) => __awaiter(void 0, void 0, void 0, function* () {
    config = merge(defaults, config);
    if (!config.appName)
        config.appName = readPkg.sync().pkg.name;
    const data = yield open(config);
    return new Logger(config, data);
});
export default {
    createNewLogger: createNewLogger,
};
