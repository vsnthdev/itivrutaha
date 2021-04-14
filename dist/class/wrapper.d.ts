import { ConfigImpl } from '../config.js';
declare const _default: ({ msg, config, exitCode, condition, }: {
    msg: string | Error;
    config: ConfigImpl;
    exitCode?: number;
    condition?: (config: ConfigImpl) => boolean;
}) => void;
export default _default;
