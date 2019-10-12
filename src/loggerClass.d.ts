import { ConfigImpl } from './config';
export declare function validate(message: string | Error): boolean;
export declare class LoggerClass {
    loggerConfig: ConfigImpl;
    constructor(loggerConfig: ConfigImpl);
    success(message: string): void;
    note(message: string): void;
    info(message: string): void;
    okay(message: string): void;
    verbose(message: string): void;
    warning(message: string | Error): void;
    error(message: string | Error): void;
}
//# sourceMappingURL=loggerClass.d.ts.map