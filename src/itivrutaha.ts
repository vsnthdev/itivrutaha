/*
 *  Entryfile for itivrutaha logging module.
 *  Created On 10 October 2019
 */

import chalk from 'chalk'
import merge from 'deepmerge'
import del from 'del'
import { DateTime } from 'luxon'
import readPkg from 'read-pkg-up'

import { Logger } from './class/index.js'
import { open } from './class/log.js'
import { ConfigImpl, typeCase } from './config.js'

// Holds the default configuration which acts like a
// replacement when no value is provided for a
// particular configuration key
const defaults: ConfigImpl = {
    bootLog: true,
    shutdownLog: true,
    quietIdentifier: ['--quiet', '-q'],
    verboseIdentifier: ['--verbose', '-v'],
    theme: {
        typeCase: typeCase.lower,
        colored: true,
        boldType: true,
        string: `:time ${chalk.gray.dim('•')} :emoji :type :message`,
        timeFormat: 'HH:mm:ss dd-LL-yyyy',
    },
    logs: {
        enable: false,
        output: `output-${DateTime.local().toFormat('dd-LL-yyyy')}.log`,
        error: `error-${DateTime.local().toFormat('dd-LL-yyyy')}.log`,
    },
}

// createNewLogger() will create a new instance of the logger class
const createNewLogger = async (
    config: ConfigImpl = defaults,
): Promise<Logger> => {
    // if custom properties were given merge those together
    // with defaults so we have all properties defined
    config = merge(defaults, config)

    // fill out the fields which are specific to this
    // particular instance of Logger
    if (!config.appName) config.appName = readPkg.sync().pkg.name
    if (config.context)
        config.theme.string = `:time ${chalk.gray.dim(
            '•',
        )} ${config.context.color(config.context.name)} :emoji :type :message`

    // initialize file logging according to the configuration
    const data = await open(config)

    // return a new LoggerClass instance
    return new Logger(config, data)
}

const clearLogs = async (logger: Logger): Promise<string[]> =>
    await del(logger.config.logs.dir, { force: true })

// Export the above two functions
export default {
    /**
     * Creates a new instance of a logger.
     * @param config {ConfigImpl}
     * @returns Logger
     */
    createNewLogger,

    /**
     * Deletes the log directory for a given logger.
     * @param logger {Logger}
     * @returns string[]
     */
    clearLogs,
}
