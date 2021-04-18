/*
 *  This class which holds all the log functions.
 *  Created On 11 October 2019
 */
import { configSchema } from '../config.js';
import lifecycle from './lifecycle.js';
import render from './wrapper.js';
export class Logger {
    // constructor() executes when the class is initialized
    constructor(config, data) {
        this.success = (msg) => render({ msg, config: this.config, data: this.data });
        this.note = (msg) => render({ msg, config: this.config, data: this.data });
        this.info = (msg) => render({ msg, config: this.config, data: this.data });
        this.okay = (msg) => render({ msg, config: this.config, data: this.data });
        this.warning = (msg) => render({ msg, config: this.config, data: this.data });
        this.error = (msg, exitCode) => render({ msg, config: this.config, data: this.data, exitCode });
        // verbose() will only log the message
        // when a flag/command/option is found in the
        // command-line arguments
        this.verbose = (msg) => render({
            msg,
            config: this.config,
            data: this.data,
            condition: () => this.config.verboseIdentifier.some(argument => process.argv.includes(argument)),
        });
        const valid = configSchema.validate(config);
        if (valid.error)
            throw new Error(`itivrutaha was misconfigured: ${valid.error.message}`);
        // make the config globally relative accessible
        this.config = valid.value;
        this.data = data;
        // log a message that the the application has
        // started/stopped as per user's request
        lifecycle(valid.value, data);
    }
}
