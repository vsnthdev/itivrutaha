import { Logger } from './class/index.js';
import { ConfigImpl } from './config.js';
declare const _default: {
    createNewLogger: (config?: ConfigImpl) => Promise<Logger>;
    clearLogs: (logger: Logger) => Promise<string[]>;
};
export default _default;
