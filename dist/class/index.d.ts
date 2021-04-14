import { ConfigImpl } from '../config.js';
export declare class Logger {
    config: ConfigImpl;
    constructor(config: ConfigImpl);
    success: (msg: string) => void;
    note: (msg: string) => void;
    info: (msg: string) => void;
    okay: (msg: string) => void;
    warning: (msg: string | Error) => void;
    error: (msg: string | Error, exitCode?: number) => void;
    verbose: (msg: string) => void;
}
