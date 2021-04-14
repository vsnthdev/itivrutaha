/*
 *  Entryfile for itivrutaha logging module.
 *  Created On 10 October 2019
 */

import readPkg from 'read-pkg-up'

import { Logger } from './class/index.js'
import { ConfigImpl, typeCase } from './config.js'

// Holds the default configuration which acts like a
// replacement when no value is provided for a
// particular configuration key
const defaults: ConfigImpl = {
    colored: true,
    boldType: true,
    typeCase: typeCase.lower,
    theme: ':type :message',
    verboseIdentifier: ['--verbose', '-v'],
    timeFormat: 'HH:mm:ss dd-LL-yyyy',
    bootLog: true,
}

// createNewLogger() will create a new instance of the logger class
const createNewLogger = (config: ConfigImpl = defaults): Logger => {
    // if custom properties were given merge those together
    // with defaults so we have all properties defined
    config = { ...defaults, ...config }

    // get the app name if not automatically given
    if (!config.appName) config.appName = readPkg.sync().pkg.name

    // return a new LoggerClass instance
    return new Logger(config)
}

// Export the above two functions
export default {
    createNewLogger: createNewLogger,
}
