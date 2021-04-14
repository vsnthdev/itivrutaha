import { ConfigImpl } from './config';
import { LoggerClass } from './loggerClass';
declare function createNewLogger(loggerConfig?: ConfigImpl): LoggerClass;
declare function addCustomType(logString: string, classToAdd: LoggerClass): void;
declare const _default: {
    createNewLogger: typeof createNewLogger;
    addCustomType: typeof addCustomType;
};
export default _default;
