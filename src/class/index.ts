/*
 *  This class which holds all the log functions.
 *  Created On 11 October 2019
 */

import { ConfigImpl } from '../config.js'
import render from './wrapper.js'

export class Logger {
    // store the config globally relative to this class
    public config: ConfigImpl

    // constructor() executes when the class is initialized
    constructor(config: ConfigImpl) {
        // [TODO]: Log a message that the application was start as per user's request
        // Make the config globally relative accessible
        this.config = config
    }

    public success = (msg: string): void => render({ msg, config: this.config })
    public note = (msg: string): void => render({ msg, config: this.config })
    public info = (msg: string): void => render({ msg, config: this.config })
    public okay = (msg: string): void => render({ msg, config: this.config })

    public warning = (msg: string | Error): void =>
        render({ msg, config: this.config })
    public error = (msg: string | Error, exitCode?: number): void =>
        render({ msg, config: this.config, exitCode })

    // verbose() will only log the message
    // when a flag/command/option is found in the
    // command-line arguments
    public verbose = (msg: string): void =>
        render({
            msg,
            config: this.config,
            condition: () =>
                this.config.verboseIdentifier.some(argument =>
                    process.argv.includes(argument),
                ),
        })
}
