import { Logger } from './class/index.js';
import { ConfigImpl } from './config.js';
declare const _default: {
    /**
     * Creates a new instance of a logger.
     * @param config {ConfigImpl}
     * @returns Logger
     */
    createNewLogger: (config?: ConfigImpl) => Promise<Logger>;
    /**
     * Deletes the log directory for a given logger.
     * @param logger {Logger}
     * @returns string[]
     */
    clearLogs: (logger: Logger) => Promise<string[]>;
};
export default _default;
