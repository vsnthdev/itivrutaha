//   ___    __________   |  Vasanth Developer (Vasanth Srivatsa)
//   __ |  / /___  __ \  |  ------------------------------------------------
//   __ | / / __  / / /  |  https://github.com/vasanthdeveloper/itivrutaha.git
//   __ |/ /  _  /_/ /   |
//   _____/   /_____/    |  Entryfile for itivrutaha logging module
//                       |

import { ConfigImpl } from './config'
import loggerClass from './loggerClass'

// createNewLogger() will create a new instance of the logger class
function createNewLogger(loggerConfig: ConfigImpl): loggerClass {
    console.log(`passed logger config: ${JSON.stringify(loggerConfig, null, 4)}`)
    return new loggerClass(loggerConfig)
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