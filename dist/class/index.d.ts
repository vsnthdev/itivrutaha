import { ConfigImpl, DataImpl } from '../config.js';
export declare class Logger {
    config: ConfigImpl;
    data: DataImpl;
    constructor(config: ConfigImpl, data: DataImpl);
    success: (msg: string) => void;
    note: (msg: string) => void;
    info: (msg: string) => void;
    okay: (msg: string) => void;
    warning: (msg: string | Error) => void;
    error: (msg: string | Error, exitCode?: number) => void;
    verbose: (msg: string) => void;
}
