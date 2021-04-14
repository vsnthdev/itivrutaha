/*
 *  This file will contain code related to loading and storing configuration.
 *  Created On 11 October 2019
 */

// The skeleton which has all possible settings passable to the loggerClass
export interface ConfigImpl {
    theme?: string
    appName?: string
    bootLog: boolean
    colored?: boolean
    boldType?: boolean
    typeCase?: typeCase
    timeFormat?: string
    verboseIdentifier?: Array<string>
}

// typeCase enumerator will hold the int values for type string case
export enum typeCase {
    'upper',
    'lower',
    'title',
}
