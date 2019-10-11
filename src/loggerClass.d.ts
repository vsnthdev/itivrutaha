import { ConfigImpl } from './config';
export default class LoggerClass {
    constructor(loggerConfig: ConfigImpl);
    custom: object;
    success(): void;
    note(): void;
    info(): void;
    okay(): void;
    warning(): void;
    error(): void;
}
//# sourceMappingURL=loggerClass.d.ts.map