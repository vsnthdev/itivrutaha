import { ConfigImpl } from './config';
export default class LoggerClass {
    private loggerConfig;
    constructor(loggerConfig: ConfigImpl);
    success(message: string): void;
    note(message: string): void;
    info(message: string): void;
    okay(message: string): void;
    warning(message: string | Error): void;
    error(message: string | Error): void;
    private validate;
}
//# sourceMappingURL=loggerClass.d.ts.map