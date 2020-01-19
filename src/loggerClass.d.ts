import { ConfigImpl, MessageTypeImpl } from './config';
export declare function validate(message: string | Error): boolean;
export declare class LoggerClass {
    private messageTypeLongestLength;
    loggerConfig: ConfigImpl;
    constructor(loggerConfig: ConfigImpl);
    registerMessageType(type: MessageTypeImpl, addToClass: boolean): Promise<void>;
    success(message: string): Promise<void>;
    note(message: string): Promise<void>;
    info(message: string): Promise<void>;
    okay(message: string): Promise<void>;
    verbose(message: string): Promise<void>;
    warning(message: string | Error): Promise<void>;
    error(message: string | Error, exitCode?: number): Promise<void>;
}
//# sourceMappingURL=loggerClass.d.ts.map