/*
 *  Renders the ":data" variable.
 *  Created On 15 January 2024
 */

import chalk from 'chalk'
import { highlight } from 'cli-highlight'

function formatJSON(data: any) {
    return JSON.stringify(data)
        .replace(/{"/g, '{ "')
        .replace(/"}/g, '" }')
        .replace(/,"/g, ', "')
        .replace(/":/g, '": ')
}

export function data(input: any) {
    if (!input) return ''

    let str = ''

    for (const key in input) {
        const value = input[key]
        const keyBlock = `${chalk.cyanBright(key)}${chalk.whiteBright('=')}`

        if (value instanceof Error) {
            str = str.concat(keyBlock).concat(chalk.magentaBright(value.message)).concat(' ')
        } else if (typeof value == 'object') {
            str = str.concat(keyBlock).concat(highlight(formatJSON(value), {
                language: 'json',
                ignoreIllegals: true,
            })).concat(' ')
        } else if (typeof value == 'string') {
            str = str.concat(keyBlock).concat(chalk.magentaBright(value)).concat(' ')
        } else {
            str = str.concat(keyBlock).concat(chalk.magentaBright(JSON.stringify(value))).concat(' ')
        }
    }

    return str.trim()
}
