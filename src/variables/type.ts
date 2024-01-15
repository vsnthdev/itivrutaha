/*
 *  Renders the ":type" variable.
 *  Created On 15 January 2024
 */

import { type LogType } from "../config.js";

export function type<LogTypeName extends string>(type: LogType<LogTypeName>) {
    return type.color(type.name)
}
