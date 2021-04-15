/*
 *  Handles writing log files.
 *  Created On 15 April 2021
 */

import paths from 'env-paths'
import fs from 'fs/promises'
import mkdirp from 'mkdirp'
import cleanup from 'node-cleanup'
import path from 'path'
import strip from 'strip-ansi'

import { ConfigImpl, DataImpl } from '../config'

export const close = async (close: boolean, data: DataImpl): Promise<void> => {
    if (close) {
        await data.output.close()
        await data.error.close()
    }
}

export const open = async (config: ConfigImpl): Promise<DataImpl> => {
    // variable to store data
    const data: DataImpl = {}

    if (config.logs.enable == true && !config.logs.dir) {
        const { log } = paths(config.appName, {
            suffix: '',
        })

        config.logs.dir = log
    }
    if (config.logs.enable) {
        // make sure that the folder exists
        await mkdirp(path.dirname(config.logs.dir))

        // open log files
        data.output = await fs.open(
            path.join(config.logs.dir, config.logs.output),
            'a',
            0o666,
        )

        data.error = await fs.open(
            path.join(config.logs.dir, config.logs.error),
            'a',
            0o666,
        )
    }

    // attach the closing hook
    cleanup(() => {
        close(!config.shutdownLog, data)
    })

    return data
}

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
