import { ConfigImpl } from '../config.js';
declare const _default: ({ msg, type, config, exitCode, condition, }: {
    type?: string;
    exitCode?: number;
    config: ConfigImpl;
    msg: string | Error;
    condition?: (config: ConfigImpl) => boolean;
}) => void;
export default _default;
