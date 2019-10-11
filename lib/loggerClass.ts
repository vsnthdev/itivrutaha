// This class which holds all the log functions

import { ConfigImpl } from './config'
import renderTheme from './renderer'

export default class LoggerClass {
    // Store the config globally relative to this class
    private loggerConfig: ConfigImpl
    
    // constructor() executes when the class is created
    constructor(loggerConfig: ConfigImpl) {
        // [TODO]: Log a message that the application was start as per user's request
        // Make the loggerConfig globally relative accessible
        this.loggerConfig = loggerConfig
    }

    // success() will log a successful message
    public success(message: string): void {
        if (this.validate(message) == true) {
            console.log(renderTheme('success', message, this.loggerConfig))
        }
    }

    // note() will log a note message
    public note(message: string): void {
        if (this.validate(message) == true) {
            console.log(renderTheme('note', message, this.loggerConfig))
        }
    }

    // info() will log an info message
    public info(message: string): void {
        if (this.validate(message) == true) {
            console.log(renderTheme('info', message, this.loggerConfig))
        }
    }

    // okay() will log a message that is not an info, or a note
    public okay(message: string): void {
        if (this.validate(message) == true) {
            console.log(renderTheme('okay', message, this.loggerConfig))
        }
    }

    // warning() will log a warning message
    // it can take an error or a string as input
    // when an error is sent, the message will be logged.
    public warning(message: string | Error): void {
        if (this.validate(message) == true) {
            // Check if an error was passed or a message
            if (typeof message === 'string') {
                console.log(renderTheme('warning', message, this.loggerConfig))
            } else {
                console.log(renderTheme('warning', message.message, this.loggerConfig))
            }
        }
    }

    // error() will log an error message
    // optionally an exit code can be given
    // if given, the program will exit instantly with the specified exit code
    public error(message: string | Error): void {
        if (this.validate(message) == true) {
            // Check if an error was passed or a message
            if (typeof message === 'string') {
                console.log(renderTheme('error', message, this.loggerConfig))
            } else {
                console.log(renderTheme('error', message.message, this.loggerConfig))
            }
        }
    }

    // validate() will suppress the log call if no message was provided
    private validate(message: string | Error): boolean {
        if (message === undefined) {
            return false
        } else {
            return true
        }
    }
}