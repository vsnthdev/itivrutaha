import { ConfigImpl } from './config.js';
import { LoggerClass } from './loggerClass.js';
declare const _default: {
    createNewLogger: (loggerConfig?: ConfigImpl) => LoggerClass;
    addCustomType: (logString: string, classToAdd: LoggerClass) => void;
};
export default _default;
