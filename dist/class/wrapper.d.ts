import { ConfigImpl, DataImpl } from '../config.js';
declare const _default: ({ msg, type, data, config, exitCode, condition, }: {
    type?: string;
    data: DataImpl;
    exitCode?: number;
    config: ConfigImpl;
    msg: string | Error;
    condition?: (config: ConfigImpl) => boolean;
}) => void;
export default _default;
