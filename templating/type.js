'use strict';

// [NOTE]: This file will render the message type
// Possible message types:
// success
// info
// okay
// verbose
// warning
// error

// Possible message type casing values are:
// upper
// lower
// title

// Require the third-party node modules
const chalk = require('chalk');

// The function will render the message by taking the necessary configuration
function renderType(type, config) {
    // The variable that will hold the returnable type string
    let returnableType = type;

    // Convert to the character casing accordingly
    switch (config.typeCasing) {
        case 'lower':
            returnableType = type.toLowerCase();
            break;

        case 'upper':
            returnableType = type.toUpperCase();
            break;

        case 'title':
            returnableType = toTitleCase(type);
            break;
        default:
            throw Error(`Property "typeCasing" does not have a valid value.`);
    }

    // Color the string accordingly, if colored is set to true
    if (config.colored == true) {
        switch (type) {
            case 'success':
                returnableType = chalk.greenBright.bold(returnableType);
                break;

            case 'info':
                returnableType = chalk.blueBright.bold(returnableType);
                break;

            case 'okay':
                returnableType = chalk.gray.bold(returnableType);
                break;

            case 'verbose':
                returnableType = chalk.magentaBright.bold(returnableType);
                break;

            case 'warning':
                returnableType = chalk.yellowBright.bold(returnableType);
                break;

            case 'error':
                returnableType = chalk.redBright.bold(returnableType);
                break;
            default:
                throw Error(`Message type: "${type}" is not implementated.`);
        }
    }

    // Return the prepared returnable string
    return config.theme.replace(':type', returnableType);
}

// The function that will use Regex to convert into title case
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

// Export the renderType function
module.exports = renderType;