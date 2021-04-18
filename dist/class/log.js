/*
 *  Handles writing log files.
 *  Created On 15 April 2021
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import paths from 'env-paths';
import fs from 'fs/promises';
import mkdirp from 'mkdirp';
import cleanup from 'node-cleanup';
import path from 'path';
import strip from 'strip-ansi';
export const close = (close, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (close) {
        yield data.output.close();
        yield data.error.close();
    }
});
export const open = (config) => __awaiter(void 0, void 0, void 0, function* () {
    // variable to store data
    const data = {};
    if (config.logs.enable == true && !config.logs.dir) {
        const { log } = paths(config.appName, {
            suffix: '',
        });
        config.logs.dir = log;
    }
    if (config.logs.enable) {
        // make sure that the folder exists
        yield mkdirp(config.logs.dir);
        // open log files
        data.output = yield fs.open(path.join(config.logs.dir, config.logs.output), 'a', 0o666);
        data.error = yield fs.open(path.join(config.logs.dir, config.logs.error), 'a', 0o666);
    }
    // attach the closing hook
    cleanup(() => {
        close(!config.shutdownLog, data);
    });
    return data;
});
export default (log, type, config, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (config.logs.enable == false)
        return;
    // whether to write in error or output file
    const stream = ['error', 'warning'].includes(type) ? 'error' : 'output';
    // strip ansi terminal styling codes
    log = strip(log) + '\n';
    // write it!
    yield data[stream].appendFile(log);
});
