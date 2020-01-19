import chalk from 'chalk';
export interface ConfigImpl {
    colored?: boolean;
    boldType?: boolean;
    typeCase?: typeCase;
    theme?: string;
    verboseIdentifier?: Array<string>;
    timeFormat?: string;
    invertedTypes: boolean;
    typePadding: number;
}
export interface MessageTypeImpl {
    text: string;
    color: chalk.Chalk;
    backgroundColor: chalk.Chalk;
}
export declare enum typeCase {
    'upper' = 0,
    'lower' = 1,
    'title' = 2
}
//# sourceMappingURL=config.d.ts.map