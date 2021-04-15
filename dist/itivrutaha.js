var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import chalk from 'chalk';
import merge from 'deepmerge';
import del from 'del';
import { DateTime } from 'luxon';
import readPkg from 'read-pkg-up';
import { Logger } from './class/index.js';
import { open } from './class/log.js';
import { typeCase } from './config.js';
const defaults = {
    bootLog: true,
    shutdownLog: true,
    quietIdentifier: ['--quiet', '-q'],
    verboseIdentifier: ['--verbose', '-v'],
    theme: {
        typeCase: typeCase.lower,
        colored: true,
        boldType: true,
        string: `:time ${chalk.gray.dim('•')} :emoji :type :message`,
        timeFormat: 'HH:mm:ss dd-LL-yyyy',
    },
    logs: {
        enable: false,
        output: `output-${DateTime.local().toFormat('dd-LL-yyyy')}.log`,
        error: `error-${DateTime.local().toFormat('dd-LL-yyyy')}.log`,
    },
};
const createNewLogger = (config = defaults) => __awaiter(void 0, void 0, void 0, function* () {
    config = merge(defaults, config);
    if (!config.appName)
        config.appName = readPkg.sync().pkg.name;
    if (config.context)
        config.theme.string = `:time ${chalk.gray.dim('•')} ${config.context.color(config.context.name)} :emoji :type :message`;
    const data = yield open(config);
    return new Logger(config, data);
});
const clearLogs = (logger) => __awaiter(void 0, void 0, void 0, function* () { return yield del(logger.config.logs.dir, { force: true }); });
export default {
    createNewLogger,
    clearLogs,
};
