/*
 *  Renders the ":time" variable printing current time.
 *  Created On 15 January 2024
 */

import chalk from 'chalk'
import { Config } from "../itivrutaha.js"
import format from 'date-format'

export function time<ScopeName, LogTypeName extends string>(config: Config<ScopeName, LogTypeName>) {
    return chalk.gray.dim(format.asString(config.timeFormat))
}
