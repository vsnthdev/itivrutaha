import renderTheme from './renderer.js';
export class Logger {
    constructor(config) {
        this.success = (msg) => console.log(renderTheme(msg, this.config));
        this.note = (msg) => console.log(renderTheme(msg, this.config));
        this.info = (msg) => console.log(renderTheme(msg, this.config));
        this.okay = (msg) => console.log(renderTheme(msg, this.config));
        this.verbose = (message) => {
            const found = this.config.verboseIdentifier.some(argument => process.argv.includes(argument));
            if (found) {
                console.log(renderTheme(message, this.config));
            }
        };
        this.warning = (msg) => {
            if (typeof msg === 'string') {
                console.log(renderTheme(msg, this.config));
            }
            else {
                console.log(renderTheme(msg.message, this.config));
            }
        };
        this.error = (msg, exitCode) => {
            if (typeof msg === 'string') {
                console.log(renderTheme(msg, this.config));
            }
            else {
                console.log(renderTheme(msg.message, this.config));
            }
            if (exitCode) {
                process.exit(exitCode);
            }
        };
        this.config = config;
    }
}
