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

// colorize() will apply chalk stylings
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
        case 'warning':
            type = chalk.yellowBright(type)
            break
        case 'error':
            type = chalk.redBright(type)
            break
        }
    }

    // Return the styled string
    return type
}

export default function typeRender(type: string, loggerConfig: ConfigImpl): string {
    // The variable that we will later return
    let returnable = ''

    // Render according to the type received
    const colorized = colorize(type, loggerConfig)

    // Bold if configured
    if (loggerConfig.boldType == true) {
        returnable = chalk.bold(colorized)
    }

    return returnable
}