/*
 *  Entryfile for itivrutaha logging module.
 *  Created On 10 October 2019
 */

import { ConfigImpl, typeCase } from './config.js'
import { LoggerClass } from './loggerClass.js'

// This variable holds the default configuration
// which acts like a replacement when no value is provided for a configuration key
const defaultConfig: ConfigImpl = {
    colored: true,
    boldType: true,
    typeCase: typeCase.lower,
    theme: ':type :message',
    verboseIdentifier: ['--verbose', '-v'],
    timeFormat: 'HH:mm:ss dd-LL-yyyy',
}

// createNewLogger() will create a new instance of the logger class
const createNewLogger = (loggerConfig?: ConfigImpl): LoggerClass => {
    // Check if any config was passed, if not just return with default config
    if (loggerConfig) {
        // Loop through all possible config keys, fill the defaults to keys
        // for which the user hasn't specified any value
        for (const obj in defaultConfig) {
            if (loggerConfig[obj] === undefined) {
                loggerConfig[obj] = defaultConfig[obj]
            }
        }

        // Now return a loggerClass with the user's passed config
        return new LoggerClass(loggerConfig)
    } else {
        return new LoggerClass(defaultConfig)
    }
}

// Export the above two functions
export default {
    createNewLogger: createNewLogger,
}
