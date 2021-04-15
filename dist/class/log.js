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
export const close = (data) => __awaiter(void 0, void 0, void 0, function* () {
    yield data.output.close();
    yield data.error.close();
});
export const open = (config) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {};
    if (config.logs.enable == true && !config.logs.dir) {
        const { log } = paths(config.appName, {
            suffix: '',
        });
        config.logs.dir = log;
    }
    if (config.logs.enable) {
        yield mkdirp(path.dirname(config.logs.dir));
        data.output = yield fs.open(path.join(config.logs.dir, config.logs.output), 'a', 0o666);
        data.error = yield fs.open(path.join(config.logs.dir, config.logs.error), 'a', 0o666);
    }
    cleanup(() => {
        close(data);
    });
    return data;
});
export default (log, type, config, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (config.logs.enable == false)
        return;
    const stream = ['error', 'warning'].includes(type) ? 'error' : 'output';
    log = strip(log) + '\n';
    yield data[stream].appendFile(log);
});
