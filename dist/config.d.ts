/// <reference types="node" />
import { FileHandle } from 'fs/promises';
import Joi from 'joi';
export declare enum typeCase {
    'upper' = 0,
    'lower' = 1,
    'title' = 2
}
export interface ConfigImpl {
    appName?: string;
    bootLog: boolean;
    shutdownLog: boolean;
    verboseIdentifier?: Array<string>;
    theme?: {
        string: string;
        colored?: boolean;
        boldType?: boolean;
        typeCase?: typeCase;
        timeFormat?: string;
    };
    logs: {
        dir?: string;
        error: string;
        output: string;
        enable: boolean;
    };
}
export declare const configSchema: Joi.ObjectSchema<any>;
export interface DataImpl {
    output?: FileHandle;
    error?: FileHandle;
}
