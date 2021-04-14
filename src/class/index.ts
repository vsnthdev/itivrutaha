/*
 *  This class which holds all the log functions.
 *  Created On 11 October 2019
 */

import { ConfigImpl } from '../config.js'
import renderTheme from './renderer.js'

export class Logger {
    // store the config globally relative to this class
    public config: ConfigImpl

    // constructor() executes when the class is initialized
    constructor(config: ConfigImpl) {
        // [TODO]: Log a message that the application was start as per user's request
        // Make the config globally relative accessible
        this.config = config
    }

    // success() will log a successful message
    public success = (msg: string): void =>
        console.log(renderTheme(msg, this.config))

    // note() will log a note message
    public note = (msg: string): void =>
        console.log(renderTheme(msg, this.config))

    // info() will log an info message
    public info = (msg: string): void =>
        console.log(renderTheme(msg, this.config))

    // okay() will log a message that is not an info, or a note
    public okay = (msg: string): void =>
        console.log(renderTheme(msg, this.config))

    // verbose() will only log the message when a flag/command/option is found in the command-line arguments
    public verbose = (message: string): void => {
        // Check if the verbose identifier was passed by the end user
        const found = this.config.verboseIdentifier.some(argument =>
            process.argv.includes(argument),
        )

        // Only log if found was found
        if (found) {
            console.log(renderTheme(message, this.config))
        }
    }

    // it can take an error or a string as input
    // when an error is sent, the message will be logged.
    public warning = (msg: string | Error): void => {
        // Check if an error was passed or a message
        if (typeof msg === 'string') {
            console.log(renderTheme(msg, this.config))
        } else {
            console.log(renderTheme(msg.message, this.config))
        }
    }

    // error() will log an error message
    // optionally an exit code can be given
    // if given, the program will exit instantly with the specified exit code
    public error = (msg: string | Error, exitCode?: number): void => {
        // Check if an error was passed or a message
        if (typeof msg === 'string') {
            console.log(renderTheme(msg, this.config))
        } else {
            console.log(renderTheme(msg.message, this.config))
        }

        // If exitCode was provided, just exit
        if (exitCode) {
            process.exit(exitCode)
        }
    }
}
