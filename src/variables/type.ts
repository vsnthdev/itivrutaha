/*
 *  Renders the ":type" variable.
 *  Created On 15 January 2024
 */

import { LogType } from "../itivrutaha.js";

export function type<LogTypeName extends string>(type: LogType<LogTypeName>) {
    return type.color(type.name)
}
