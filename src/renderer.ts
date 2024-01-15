/*
 *  Renders a single log line by consuming an object.
 *  Created On 15 January 2024
 */

import { filterObject } from './utilts.js';
import { Config, LogType, UnifiedData } from './itivrutaha.js'
import { time } from './variables/time.js';
import { emoji } from './variables/emoji.js';
import { emojify } from 'node-emoji';

function line<Scope extends string, LogTypeName extends string>(config: Config<Scope, LogTypeName>, type: LogType<LogTypeName>, msg: string, scope?: string, data?: any) {
    // default value for scope
    scope = scope || config.scopes[0]

    // filter internal keys from data
    if (data) data = filterObject(data, ['msg', 'scope'])

    console.log(
        config.theme
            .replace(/:time/g, time(config))
            .replace(/:emoji/g, emoji(type))
            .replace(/:msg/g, emojify(msg))
    )
}

export function render<Scope extends string, LogTypeName extends string>(config: Config<Scope, LogTypeName>, type: LogType<LogTypeName>) {
    // consume all the log objects

    return (msgOrData: string | UnifiedData<Scope>, scope?: Scope, data?: any) => {
        // determine whether we're using unified data or seperate arguments
        if (typeof msgOrData == 'string') {
            // seperate arguments
            line(config, type, msgOrData, scope, data)
        } else {
            // unified data
            // ensure scope & data are not given in both placces
            if (scope) throw Error(`Specifying scope as argument is not allowed`)
            if (data) throw Error(`Specifying data separately is not allowed`)

            line(config, type, msgOrData.msg, msgOrData.scope, msgOrData)
        }
    }
}
