// This file will render the ":type" variable in the theme
// Possible message types:
// success
// note
// info
// okay
// verbose
// warning
// error

// Possible message type casing values are:
// upper = 0
// lower = 1
// title = 2

import chalk from 'chalk'
import align from 'wide-align'

import { ConfigImpl, MessageTypeImpl, typeCase } from '../config'

// bold() will make the text bold
async function bold(type: MessageTypeImpl, loggerConfig: ConfigImpl): Promise<MessageTypeImpl> {
    if (loggerConfig.boldType === true) {
        type.text = chalk.bold(type.text)
    }

    return type
}

// colorize() will apply a color depending on the type input received
// only colorize() will be called. As this function will call the rest of the styling
// functions will make a function chain like that
async function colorize(type: MessageTypeImpl, loggerConfig: ConfigImpl): Promise<MessageTypeImpl> {
    // Color accordingly
    if (loggerConfig.colored == true) {
        if (loggerConfig.invertedTypes == true) {
            type.text = type.backgroundColor.whiteBright(type.text)
        } else {
            type.text = type.color(type.text)
        }
    }

    // Return the styled string
    return type
}

// padding() will set the configured padding
async function padding(type: MessageTypeImpl, messageTypeLongestLength: number, loggerConfig: ConfigImpl): Promise<MessageTypeImpl> {
    // type.text = ' '.repeat(loggerConfig.typePadding) + type.text + ' '.repeat(loggerConfig.typePadding)

    if (loggerConfig.centerAlignTypes == true) {
        type.text = align.center(type.text, messageTypeLongestLength + loggerConfig.typePadding)
    } else {
        type.text = ' '.repeat(loggerConfig.typePadding) + type.text + ' '.repeat(loggerConfig.typePadding)
    }

    return type
}

// underline() will add an underline if requested
async function underline(type: MessageTypeImpl, loggerConfig: ConfigImpl): Promise<MessageTypeImpl> {
    if (loggerConfig.underlineType == true) {
        type.text = chalk.underline(type.text)
    }

    return type
}

// toTitleCase() will convert a given string into title case
function toTitleCase(str): string {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}

// casing() will set the character casing
async function casing(type: MessageTypeImpl, loggerConfig: ConfigImpl): Promise<MessageTypeImpl> {
    switch (loggerConfig.typeCase) {
    case typeCase.lower:
        type.text = type.text.toLowerCase()
        break
    case typeCase.upper:
        type.text = type.text.toUpperCase()
        break
    case typeCase.title:
        type.text = toTitleCase(type.text)
        break
    default:
        type.text = type.text.toLowerCase()
        break
    }

    return type
}

export default async function typeRender(type: MessageTypeImpl, messageTypeLongestLength: number, loggerConfig: ConfigImpl): Promise<string> {
    // Render according to the type received
    type = await casing(type, loggerConfig)
    type = await underline(type, loggerConfig)
    type = await padding(type, messageTypeLongestLength, loggerConfig)
    type = await bold(type, loggerConfig)
    type = await colorize(type, loggerConfig)

    return type.text
}