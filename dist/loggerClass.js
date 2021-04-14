import renderTheme from './renderer.js';
export function validate(message) {
    if (message === undefined) {
        return false;
    }
    else {
        return true;
    }
}
export class LoggerClass {
    constructor(loggerConfig) {
        this.loggerConfig = loggerConfig;
    }
    success(message) {
        if (validate(message) == true) {
            console.log(renderTheme('success', message, this.loggerConfig));
        }
    }
    note(message) {
        if (validate(message) == true) {
            console.log(renderTheme('note', message, this.loggerConfig));
        }
    }
    info(message) {
        if (validate(message) == true) {
            console.log(renderTheme('info', message, this.loggerConfig));
        }
    }
    okay(message) {
        if (validate(message) == true) {
            console.log(renderTheme('okay', message, this.loggerConfig));
        }
    }
    verbose(message) {
        const found = this.loggerConfig.verboseIdentifier.some(argument => process.argv.includes(argument));
        if (found) {
            if (validate(message) == true) {
                console.log(renderTheme('verbose', message, this.loggerConfig));
            }
        }
    }
    warning(message) {
        if (validate(message) == true) {
            if (typeof message === 'string') {
                console.log(renderTheme('warning', message, this.loggerConfig));
            }
            else {
                console.log(renderTheme('warning', message.message, this.loggerConfig));
            }
        }
    }
    error(message, exitCode) {
        if (validate(message) == true) {
            if (typeof message === 'string') {
                console.log(renderTheme('error', message, this.loggerConfig));
            }
            else {
                console.log(renderTheme('error', message.message, this.loggerConfig));
            }
            if (exitCode) {
                process.exit(exitCode);
            }
        }
    }
}
