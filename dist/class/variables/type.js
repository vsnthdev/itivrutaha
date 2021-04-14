import chalk from 'chalk';
function bold(type, loggerConfig) {
    if (loggerConfig.boldType === true) {
        return chalk.bold(type);
    }
    else {
        return type;
    }
}
function colorize(type, loggerConfig) {
    if (loggerConfig.colored == true) {
        switch (type.toLowerCase()) {
            case 'success':
                type = chalk.greenBright(type);
                break;
            case 'note':
                type = chalk.magentaBright(type);
                break;
            case 'info':
                type = chalk.blueBright(type);
                break;
            case 'okay':
                type = chalk.gray(type);
                break;
            case 'verbose':
                type = chalk.cyanBright(type);
                break;
            case 'warning':
                type = chalk.yellowBright(type);
                break;
            case 'error':
                type = chalk.redBright(type);
                break;
        }
    }
    return bold(type, loggerConfig);
}
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
function casing(type, loggerConfig) {
    switch (loggerConfig.typeCase) {
        case 0:
            return colorize(type.toUpperCase(), loggerConfig);
        case 1:
            return colorize(type.toLowerCase(), loggerConfig);
        case 2:
            return colorize(toTitleCase(type), loggerConfig);
        default:
            return colorize(type, loggerConfig);
    }
}
export default function typeRender(type, loggerConfig) {
    return casing(type, loggerConfig);
}
