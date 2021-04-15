import { DateTime } from 'luxon';
import { configSchema } from '../config.js';
import render from './wrapper.js';
const startup = (config, data) => {
    render({
        data,
        config,
        msg: `${config.appName} boot`,
        type: 'note',
        condition: () => config.bootLog,
    });
    render({
        data,
        config,
        msg: `Started on ${DateTime.local().toFormat('hh:mm:ss a, LLL dd yyyy')}`,
        type: 'info',
        condition: () => config.bootLog,
    });
};
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
        startup(config, data);
    }
}
