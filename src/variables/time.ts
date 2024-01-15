/*
 *  Renders the ":time" variable printing current time.
 *  Created On 15 January 2024
 */

import chalk from 'chalk'
import { Config } from "../itivrutaha.js"
import format from 'date-format'

export function time<Scope extends string, LogTypeName extends string>(config: Config<Scope, LogTypeName>) {
    return chalk.gray.dim(format.asString(config.timeFormat))
}
