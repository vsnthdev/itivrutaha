/*
 *  Renders the ":emoji" variable if an emoji is specified.
 *  Created On 15 January 2024
 */

import { LogType } from "../config.js";

export function emoji<LogTypeName extends string>(type: LogType<LogTypeName>) {
    return type.emoji.trim()
}
