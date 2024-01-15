/*
 *  Contains configuration related code.
 *  Created On 15 January 2024
 */

import chalk, { ChalkInstance } from "chalk"

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
    msg: string
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
    theme: `:time ${chalk.gray.dim('•')} :scope :emoji :type :msg :data`,
    timeFormat: 'hh:mm:ss dd-MM-yyyy',
    scopes: [
        {
            name: 'app',
            color: chalk.redBright
        }
    ],
    types: [
        {
            name: 'success',
            emoji: '✅',
            color: chalk.greenBright,
        },
        {
            name: 'info',
            emoji: 'ℹ️',
            color: chalk.blueBright,
        },
        {
            name: 'okay',
            emoji: '👍',
            color: chalk.gray,
        },
        {
            name: 'note',
            emoji: '✍️',
            color: chalk.magentaBright,
        },
        {
            name: 'verbose',
            emoji: '🧐',
            color: chalk.cyanBright,
        },
        {
            name: 'warning',
            emoji: '⚠️',
            color: chalk.yellowBright
        },
        {
            name: 'error',
            emoji: '🚨',
            color: chalk.redBright
        },
    ]
})
