/*
 *  Entryfile for itivrutaha logging module.
 *  Created On 10 October 2019
 */

import merge from 'deepmerge'
import paths from 'env-paths'
import fs from 'fs/promises'
import mkdirp from 'mkdirp'
import path from 'path'
import readPkg from 'read-pkg-up'

import { Logger } from './class/index.js'
import { ConfigImpl, DataImpl, typeCase } from './config.js'

// Holds the default configuration which acts like a
// replacement when no value is provided for a
// particular configuration key
const defaults: ConfigImpl = {
    bootLog: true,
    verboseIdentifier: ['--verbose', '-v'],
    theme: {
        typeCase: typeCase.lower,
        colored: true,
        boldType: true,
        string: ':emoji :type :message',
        timeFormat: 'HH:mm:ss dd-LL-yyyy',
    },
    logs: {
        enable: false,
        output: 'output.log',
        error: 'error.log',
    },
}

// createNewLogger() will create a new instance of the logger class
const createNewLogger = async (
    config: ConfigImpl = defaults,
): Promise<Logger> => {
    // if custom properties were given merge those together
    // with defaults so we have all properties defined
    config = merge(defaults, config)

    // variable to store data
    const data: DataImpl = {}

    // fill out the fields which are specific to this
    // particular instance of Logger
    if (!config.appName) config.appName = readPkg.sync().pkg.name
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

    // return a new LoggerClass instance
    return new Logger(config, data)
}

// Export the above two functions
export default {
    createNewLogger: createNewLogger,
}
