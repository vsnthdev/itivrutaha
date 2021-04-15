/*
 *  This file will contain code related to loading and storing configuration.
 *  Created On 11 October 2019
 */

import { FileHandle } from 'fs/promises'
import Joi from 'joi'

// typeCase enumerator will hold the
// int values for type string case
export enum typeCase {
    'upper',
    'lower',
    'title',
}

// The skeleton which has all possible
// settings passable to the Logger
export interface ConfigImpl {
    appName?: string
    bootLog: boolean
    shutdownLog: boolean
    verboseIdentifier?: Array<string>
    theme?: {
        string: string
        colored?: boolean
        boldType?: boolean
        typeCase?: typeCase
        timeFormat?: string
    }
    logs: {
        dir?: string
        error: string
        output: string
        enable: boolean
    }
}

export const configSchema = Joi.object({
    appName: Joi.string(),
    bootLog: Joi.bool().required(),
    shutdownLog: Joi.bool().required(),
    verboseIdentifier: Joi.array().items(Joi.string()),
    theme: Joi.object({
        string: Joi.string().required(),
        colored: Joi.bool(),
        boldType: Joi.bool(),
        typeCase: Joi.number(),
        timeFormat: Joi.string(),
    }),
    logs: Joi.object({
        dir: Joi.string(),
        output: Joi.string().required(),
        error: Joi.string().required(),
        enable: Joi.bool().required(),
    }),
})

export interface DataImpl {
    output?: FileHandle
    error?: FileHandle
}
