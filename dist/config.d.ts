export interface ConfigImpl {
    theme?: string;
    appName?: string;
    bootLog: boolean;
    colored?: boolean;
    boldType?: boolean;
    typeCase?: typeCase;
    timeFormat?: string;
    verboseIdentifier?: Array<string>;
}
export declare enum typeCase {
    'upper' = 0,
    'lower' = 1,
    'title' = 2
}
