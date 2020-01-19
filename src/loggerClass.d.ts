import { ConfigImpl } from './config';
export declare function validate(message: string | Error): boolean;
export declare class LoggerClass {
    loggerConfig: ConfigImpl;
    constructor(loggerConfig: ConfigImpl);
    success(message: string): Promise<void>;
    note(message: string): Promise<void>;
    info(message: string): Promise<void>;
    okay(message: string): Promise<void>;
    verbose(message: string): Promise<void>;
    warning(message: string | Error): Promise<void>;
    error(message: string | Error, exitCode?: number): Promise<void>;
}
//# sourceMappingURL=loggerClass.d.ts.map