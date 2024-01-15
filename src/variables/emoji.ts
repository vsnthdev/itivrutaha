/*
 *  Renders the ":emoji" variable if an emoji is specified.
 *  Created On 15 January 2024
 */

import { get } from "node-emoji";
import { type LogType } from '../itivrutaha.js';

export function emoji<LogTypeName extends string>(type: LogType<LogTypeName>) {
    return get(type.emoji)
}
