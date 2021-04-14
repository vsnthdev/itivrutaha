/*
 *  This file will render the ":type" variable in the theme.
 *  Created On 12 October 2019
 */

import chalk from 'chalk'

import { ConfigImpl } from '../../config.js'

// bold() will make the text bold
const bold = (type: string, config: ConfigImpl): string =>
    config.boldType ? chalk.bold(type) : type

// this function will call the rest of the styling
// functions will make a function chain like that
const colorize = (type: string, config: ConfigImpl): string => {
    if (!config.colored) return bold(type, config)

    const colors = {
        okay: chalk.gray,
        info: chalk.blueBright,
        error: chalk.redBright,
        note: chalk.magentaBright,
        verbose: chalk.cyanBright,
        success: chalk.greenBright,
        warning: chalk.yellowBright,
    }

    return bold(colors[type](type), config)
}

// casing() will set the character casing
const casing = (type: string, config: ConfigImpl): string => {
    const toTitleCase = (str): string =>
        str.replace(
            /\w\S*/g,
            txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
        )

    const func = {
        0: (str: string) => str.toUpperCase(),
        1: (str: string) => str.toLowerCase(),
        2: (str: string) => toTitleCase(str),
    }

    return colorize(func[config.typeCase](type), config)
}

export default (type: string, config: ConfigImpl): string =>
    casing(type, config)
