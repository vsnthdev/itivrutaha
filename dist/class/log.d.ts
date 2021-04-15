import { ConfigImpl, DataImpl } from '../config';
export declare const close: (close: boolean, data: DataImpl) => Promise<void>;
export declare const open: (config: ConfigImpl) => Promise<DataImpl>;
declare const _default: (log: string, type: string, config: ConfigImpl, data: DataImpl) => Promise<void>;
export default _default;
