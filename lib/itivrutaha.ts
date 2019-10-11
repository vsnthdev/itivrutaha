//   ___    __________   |  Vasanth Developer (Vasanth Srivatsa)
//   __ |  / /___  __ \  |  ------------------------------------------------
//   __ | / / __  / / /  |  https://github.com/vasanthdeveloper/itivrutaha.git
//   __ |/ /  _  /_/ /   |
//   _____/   /_____/    |  Entryfile for itivrutaha logging module
//                       |

import { ConfigImpl } from './config'
import loggerClass from './loggerClass'

// This variable holds the default configuration
// which acts like a replacement when no value is provided for a configuration key
const defaultConfig: ConfigImpl = {
    colored: true,
    boldType: true,
    theme: ':type :message'
}

// createNewLogger() will create a new instance of the logger class
function createNewLogger(loggerConfig: ConfigImpl): loggerClass {
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
        return new loggerClass(loggerConfig)
    } else {
        return new loggerClass(defaultConfig)
    }
}

// addCustomType() will dynamically add a pre-prototyped function to logger class
function addCustomType(logString: string, classToAdd: loggerClass): void {
    // console.log(`Add ${typeString} to ${JSON.stringify(classToAdd, null, 4)}`)
    const newlyAddedFunc = function(message: string): void {
        console.log('Triggered the newly added function')
        console.log(message)
    }

    // Add the function to the passed loggerClass
    classToAdd[logString] = newlyAddedFunc
}

// Export the above two functions
export = {
    createNewLogger: createNewLogger,
    addCustomType: addCustomType
}