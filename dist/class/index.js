import { configSchema } from '../config.js';
import lifecycle from './lifecycle.js';
import render from './wrapper.js';
export class Logger {
    constructor(config, data) {
        this.success = (msg) => render({ msg, config: this.config, data: this.data });
        this.note = (msg) => render({ msg, config: this.config, data: this.data });
        this.info = (msg) => render({ msg, config: this.config, data: this.data });
        this.okay = (msg) => render({ msg, config: this.config, data: this.data });
        this.warning = (msg) => render({ msg, config: this.config, data: this.data });
        this.error = (msg, exitCode) => render({ msg, config: this.config, data: this.data, exitCode });
        this.verbose = (msg) => render({
            msg,
            config: this.config,
            data: this.data,
            condition: () => this.config.verboseIdentifier.some(argument => process.argv.includes(argument)),
        });
        const valid = configSchema.validate(config);
        if (valid.error)
            throw new Error(`itivrutaha was misconfigured: ${valid.error.message}`);
        this.config = valid.value;
        this.data = data;
        lifecycle(valid.value, data);
    }
}
