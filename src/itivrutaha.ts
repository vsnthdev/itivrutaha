//   ___    __________   |  Vasanth Developer (Vasanth Srivatsa)
//   __ |  / /___  __ \  |  ------------------------------------------------
//   __ | / / __  / / /  |  https://github.com/vasanthdeveloper/itivrutaha.git
//   __ |/ /  _  /_/ /   |
//   _____/   /_____/    |  Entryfile for itivrutaha logging module
//                       |

import { ConfigImpl, typeCase } from './config.js'
import { LoggerClass, validate } from './loggerClass.js'
import renderTheme from './renderer.js'

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
function createNewLogger(loggerConfig?: ConfigImpl): LoggerClass {
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

// addCustomType() will dynamically add a pre-prototyped function to logger class
function addCustomType(logString: string, classToAdd: LoggerClass): void {
    // Create a function that renders a message suitable for dynamically
    // adding to the loggerClass
    const newlyAddedFunc = function (message: string): void {
        if (validate(message) == true) {
            console.log(
                renderTheme(logString, message, classToAdd.loggerConfig),
            )
        }
    }

    // Add the function to the passed loggerClass
    classToAdd[logString] = newlyAddedFunc
}

// Export the above two functions
export default {
    createNewLogger: createNewLogger,
    addCustomType: addCustomType,
}
