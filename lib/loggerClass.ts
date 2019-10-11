// This class which holds all the log functions

import { ConfigImpl } from './config'

export default class LoggerClass {
    // constructor() executes when the class is created
    constructor(loggerConfig: ConfigImpl) {
        console.log('Logger Class Initialized')
        console.log(`Passed Configuration is ${JSON.stringify(loggerConfig, null, 4)}`)
    }

    // success() will log a successful message
    public success(): void {
        console.log('log a success message')
    }

    // note() will log a note message
    public note(): void {
        console.log('send a note message')
    }

    // info() will log an info message
    public info(): void {
        console.log('log an information message')
    }

    // okay() will log a message that is not an info, or a note
    public okay(): void {
        console.log('Log an okay message')
    }

    // warning() will log a warning message
    // it can take an error or a string as input
    // when an error is sent, the message will be logged.
    public warning(): void {
        console.log('Warn depending on the data received.')
    }

    // error() will log an error message
    // optionally an exit code can be given
    // if given, the program will exit instantly with the specified exit code
    public error(): void {
        console.log('Handle an error')
    }
}