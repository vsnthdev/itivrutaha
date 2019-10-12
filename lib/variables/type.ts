// This file will render the ":type" variable in the theme
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

import chalk from 'chalk'

import { ConfigImpl } from '../config'

// bold() will make the text bold
function bold(type: string, loggerConfig: ConfigImpl): string {
    if (loggerConfig.boldType === true) {
        return chalk.bold(type)
    } else {
        return type
    }
}

// colorize() will apply a color depending on the type input received
// only colorize() will be called. As this function will call the rest of the styling
// functions will make a function chain like that
function colorize(type: string, loggerConfig: ConfigImpl): string {
    // Color accordingly
    if (loggerConfig.colored == true) {
        // Color depending on type of message
        switch (type.toLowerCase()) {
        case 'success':
            type = chalk.greenBright(type)
            break
        case 'note':
            type = chalk.magentaBright(type)
            break
        case 'info':
            type = chalk.blueBright(type)
            break
        case 'okay':
            type = chalk.gray(type)
            break
        case 'verbose':
            type = chalk.cyanBright(type)
            break
        case 'warning':
            type = chalk.yellowBright(type)
            break
        case 'error':
            type = chalk.redBright(type)
            break
        }
    }

    // Return the styled string
    return bold(type, loggerConfig)
}

// toTitleCase() will convert a given string into title case
function toTitleCase(str): string {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}

// casing() will set the character casing
function casing(type: string, loggerConfig: ConfigImpl): string {
    switch (loggerConfig.typeCase) {
    case 0:
        return colorize(type.toUpperCase(), loggerConfig)
    case 1:
        return colorize(type.toLowerCase(), loggerConfig)
    case 2:
        return colorize(toTitleCase(type), loggerConfig)
    default:
        return colorize(type, loggerConfig)
    }
}

export default function typeRender(type: string, loggerConfig: ConfigImpl): string {
    // Render according to the type received
    return casing(type, loggerConfig)
}