import { ConfigImpl } from './config';
import loggerClass from './loggerClass';
declare function createNewLogger(loggerConfig: ConfigImpl): loggerClass;
declare function addCustomType(logString: string, classToAdd: loggerClass): void;
declare const _default: {
    createNewLogger: typeof createNewLogger;
    addCustomType: typeof addCustomType;
};
export = _default;
//# sourceMappingURL=itivrutaha.d.ts.map