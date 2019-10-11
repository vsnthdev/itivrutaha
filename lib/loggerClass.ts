// This class which holds all the log functions

import { ConfigImpl } from './config'

export default class LoggerClass {
    constructor(loggerConfig: ConfigImpl) {
        console.log('Logger Class Initialized')
        console.log(`Passed Configuration is ${JSON.stringify(loggerConfig, null, 4)}`)
    }

    // info() will log an info message
    public info(): void {
        console.log('log an information message')
    }
}