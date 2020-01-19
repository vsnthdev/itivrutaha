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
    centerAlignTypes: boolean;
    underlineType: boolean;
}
export interface MessageTypeImpl {
    text: string;
    color: chalk.Chalk;
    backgroundColor: chalk.Chalk;
}
export declare enum typeCase {
    upper = "upper",
    lower = "lower",
    title = "title"
}
//# sourceMappingURL=config.d.ts.map