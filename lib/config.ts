// This file will contain code related to loading and storing configuration

import chalk from 'chalk'

// The skeleton which has all possible settings passable to the loggerClass
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

// The interface skeleton that has all possible options to customize/define a message type
export interface MessageTypeImpl {
    text: string;
    // symbol: string;
    color: chalk.Chalk;
    backgroundColor: chalk.Chalk;
}

// typeCase enumerator will hold the int values for type string case
export enum typeCase {
    'upper', 'lower', 'title'
}