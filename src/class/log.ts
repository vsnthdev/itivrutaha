/*
 *  Handles writing log files.
 *  Created On 15 April 2021
 */

import strip from 'strip-ansi'

import { ConfigImpl, DataImpl } from '../config'

export default async (
    log: string,
    type: string,
    config: ConfigImpl,
    data: DataImpl,
): Promise<void> => {
    if (config.logs.enable == false) return

    // whether to write in error or output file
    const stream = ['error', 'warning'].includes(type) ? 'error' : 'output'

    // strip ansi terminal styling codes
    log = strip(log) + '\n'

    // write it!
    await data[stream].appendFile(log)
}
