/*
 *  This class which holds all the log functions.
 *  Created On 11 October 2019
 */

import { ConfigImpl, configSchema, DataImpl } from '../config.js'
import lifecycle from './lifecycle.js'
import render from './wrapper.js'

export class Logger {
    // store the config and data globally
    // relative to this class
    public config: ConfigImpl
    public data: DataImpl

    // constructor() executes when the class is initialized
    constructor(config: ConfigImpl, data: DataImpl) {
        const valid = configSchema.validate(config)
        if (valid.error)
            throw new Error(
                `itivrutaha was misconfigured: ${valid.error.message}`,
            )

        // make the config globally relative accessible
        this.config = valid.value
        this.data = data

        // log a message that the the application has
        // started/stopped as per user's request
        lifecycle(valid.value, data)
    }

    public success = (msg: string): void =>
        render({ msg, config: this.config, data: this.data })
    public note = (msg: string): void =>
        render({ msg, config: this.config, data: this.data })
    public info = (msg: string): void =>
        render({ msg, config: this.config, data: this.data })
    public okay = (msg: string): void =>
        render({ msg, config: this.config, data: this.data })

    public warning = (msg: string | Error): void =>
        render({ msg, config: this.config, data: this.data })
    public error = (msg: string | Error, exitCode?: number): void =>
        render({ msg, config: this.config, data: this.data, exitCode })

    // verbose() will only log the message
    // when a flag/command/option is found in the
    // command-line arguments
    public verbose = (msg: string): void =>
        render({
            msg,
            config: this.config,
            data: this.data,
            condition: () =>
                this.config.verboseIdentifier.some(argument =>
                    process.argv.includes(argument),
                ),
        })
}
