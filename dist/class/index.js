import { DateTime } from 'luxon';
import render from './wrapper.js';
const startup = (config) => {
    render({
        config,
        msg: `${config.appName} boot`,
        type: 'note',
        condition: () => config.bootLog,
    });
    render({
        config,
        msg: `Started on ${DateTime.local().toFormat('hh:mm:ss a, LLL dd yyyy')}`,
        type: 'info',
        condition: () => config.bootLog,
    });
};
export class Logger {
    constructor(config) {
        this.success = (msg) => render({ msg, config: this.config });
        this.note = (msg) => render({ msg, config: this.config });
        this.info = (msg) => render({ msg, config: this.config });
        this.okay = (msg) => render({ msg, config: this.config });
        this.warning = (msg) => render({ msg, config: this.config });
        this.error = (msg, exitCode) => render({ msg, config: this.config, exitCode });
        this.verbose = (msg) => render({
            msg,
            config: this.config,
            condition: () => this.config.verboseIdentifier.some(argument => process.argv.includes(argument)),
        });
        this.config = config;
        startup(config);
    }
}
