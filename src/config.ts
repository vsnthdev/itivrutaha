/*
 *  Contains configuration related code.
 *  Created On 15 January 2024
 */

import chalk, { type ChalkInstance } from 'chalk'

export interface Scope<ScopeName> {
    name: ScopeName
    color: ChalkInstance
}

export interface LogType<Name> {
    name: Name
    emoji: string
    color: ChalkInstance
}

export interface UnifiedData<ScopeName> {
    scope?: ScopeName
    msg: string | Error
    [key: string]: any
}

export interface Config<ScopeName, LogTypeName> {
    theme: string
    timeFormat: string
    scopes: Scope<ScopeName>[]
    types: LogType<LogTypeName>[]
}

export function makeConfig<Scope extends string, LogTypeName extends string>(config: Config<Scope, LogTypeName>) {
    return config
}

export const defaultConfig = makeConfig({
    timeFormat: 'hh:mm:ss dd-MM-yyyy',
    theme: `:time ${chalk.gray.dim('•')} :scope :emoji :type :msg :data`,
    scopes: [
        {
            name: 'app',
            color: chalk.redBright
        }
    ],
    types: [
        {
            emoji: '✅',
            name: 'success',
            color: chalk.greenBright,
        },
        {
            emoji: 'ℹ️',
            name: 'info',
            color: chalk.blueBright,
        },
        {
            emoji: '👍',
            name: 'okay',
            color: chalk.gray,
        },
        {
            emoji: '✍️',
            name: 'note',
            color: chalk.magentaBright,
        },
        {
            emoji: '🧐',
            name: 'verbose',
            color: chalk.cyanBright,
        },
        {
            emoji: '⚠️',
            name: 'warning',
            color: chalk.yellowBright
        },
        {
            emoji: '🚨',
            name: 'error',
            color: chalk.redBright
        },
    ]
})
