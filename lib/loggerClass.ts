// This class which holds all the log functions

import { ConfigImpl } from './config'
import renderTheme from './renderer'
import { successType, noteType, infoType, okayType, verboseType, warningType, errorType } from './messageTypes'

// validate() will suppress the log call if no message was provided
export function validate(message: string | Error): boolean {
    if (message === undefined) {
        return false
    } else {
        return true
    }
}

export class LoggerClass {
    // Store the config globally relative to this class
    public loggerConfig: ConfigImpl
    
    // constructor() executes when the class is created
    constructor(loggerConfig: ConfigImpl) {
        // [TODO]: Log a message that the application was start as per user's request
        // Make the loggerConfig globally relative accessible
        this.loggerConfig = loggerConfig
    }

    // success() will log a successful message
    public async success(message: string): Promise<void> {
        if (validate(message) == true) {
            console.log(await renderTheme(successType, message, this.loggerConfig))
        }
    }

    // note() will log a note message
    public async note(message: string): Promise<void> {
        if (validate(message) == true) {
            console.log(await renderTheme(noteType, message, this.loggerConfig))
        }
    }

    // info() will log an info message
    public async info(message: string): Promise<void> {
        if (validate(message) == true) {
            console.log(await renderTheme(infoType, message, this.loggerConfig))
        }
    }

    // okay() will log a message that is not an info, or a note
    public async okay(message: string): Promise<void> {
        if (validate(message) == true) {
            console.log(await renderTheme(okayType, message, this.loggerConfig))
        }
    }

    // verbose() will only log the message when a flag/command/option is found in the command-line arguments
    public async verbose(message: string): Promise<void> {
        // Check if the verbose identifier was passed by the end user
        const found = this.loggerConfig.verboseIdentifier.some(argument => process.argv.includes(argument))

        // Only log if found was found
        if (found) {
            if (validate(message) == true) {
                console.log(await renderTheme(verboseType, message, this.loggerConfig))
            }
        }
    }

    // warning() will log a warning message
    // it can take an error or a string as input
    // when an error is sent, the message will be logged.
    public async warning(message: string | Error): Promise<void> {
        if (validate(message) == true) {
            // Check if an error was passed or a message
            if (typeof message === 'string') {
                console.log(await renderTheme(warningType, message, this.loggerConfig))
            } else {
                console.log(await renderTheme(warningType, message.message, this.loggerConfig))
            }
        }
    }

    // error() will log an error message
    // optionally an exit code can be given
    // if given, the program will exit instantly with the specified exit code
    public async error(message: string | Error, exitCode?: number): Promise<void> {
        if (validate(message) == true) {
            // Check if an error was passed or a message
            if (typeof message === 'string') {
                console.log(await renderTheme(errorType, message, this.loggerConfig))
            } else {
                console.log(await renderTheme(errorType, message.message, this.loggerConfig))
            }

            // If exitCode was provided, just exit
            if (exitCode) {
                process.exit(exitCode)
            }
        }
    }   
}