/*
 *  A wrapper function that handles all specifics
 *  before passing data to the render function.
 *  Created On 14 April 2021
 */

import { ConfigImpl } from '../config.js'
import renderer from './renderer.js'

const getType = (): string =>
    new Error().stack.split('\n')[3].trim().slice(10).split(' ')[0]

export default ({
    msg,
    config,
    exitCode,
    condition,
}: {
    msg: string | Error
    config: ConfigImpl
    exitCode?: number
    condition?: (config: ConfigImpl) => boolean
}): void => {
    // check if there's a condition
    const goForward = condition ? condition(config) : true
    if (!goForward) return

    // handle if Error or message string
    if (typeof msg == 'object') msg = msg.message

    // render the log message
    console.log(renderer(getType(), msg, config))

    // handle the exitCode
    if (exitCode) process.exit(exitCode)
}
