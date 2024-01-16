/*
 *  Renders a single log line by consuming an object.
 *  Created On 15 January 2024
 */

import { filterObject } from './utilts.js'
import * as variables from './variables/index.js'
import { type Config, type LogType, type UnifiedData } from './config.js'

function line<ScopeName, LogTypeName extends string>(config: Config<ScopeName, LogTypeName>, type: LogType<LogTypeName>, msg: string | Error, scopeName?: ScopeName, data?: any) {
    // filter internal keys from data
    if (data) data = filterObject(data, ['msg', 'scope'])

    console.log(
        config.theme
            .replace(/:time/g, variables.time(config))
            .replace(/:scope/g, variables.scope(config, scopeName))
            .replace(/:emoji/g, variables.emoji(type))
            .replace(/:type/g, variables.type(type))
            .replace(/:msg/g, msg instanceof Error ? msg.message : msg)
            .replace(/:data/g, variables.data(data))
    )

    if (msg instanceof Error) {
        console.log(msg)
    }

    // whether there's an error instance in data
    for (const key in data) {
        const value = data[key]

        if (value instanceof Error) {
            console.log(value)
        }
    }
}

export function render<ScopeName, LogTypeName extends string>(config: Config<ScopeName, LogTypeName>, type: LogType<LogTypeName>) {
    // consume all the log objects

    return (msgOrData: string | UnifiedData<ScopeName> | Error, data?: any, scope?: ScopeName) => {
        if (msgOrData instanceof Error || typeof msgOrData == 'string') {
            // seperate arguments
            line(config, type, msgOrData, scope, data)
        } else {
            // unified data
            // ensure scope & data are not given in both placces
            if (scope) throw Error('Specifying scope as argument is not allowed')
            if (data) throw Error('Specifying data separately is not allowed')

            line(config, type, msgOrData.msg, msgOrData.scope, msgOrData)
        }
    }
}
