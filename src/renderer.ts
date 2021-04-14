/*
 *  This file will replace all the placeholders with real values.
 *  Created On 12 October 2019
 */

import path from 'path'

import { ConfigImpl } from './config.js'
import timeRender from './variables/time.js'
import typeRender from './variables/type.js'

export default (
    type: string,
    message: string,
    loggerConfig: ConfigImpl,
): string =>
    loggerConfig.theme
        // Render the message type
        .replace(':type', typeRender(type, loggerConfig))

        // Render the message string
        .replace(':message', message)

        // Render the time string
        .replace(':time', timeRender(loggerConfig))

        // Render the filename string
        .replace(':filename', path.basename(process.argv[1]))

        // Render the node_path variable
        .replace(':node_path', process.argv[0])

        // Render the script_path variable
        .replace(':script_path', process.argv[1])

        // Render the node_version variable
        .replace(':node_version', process.version)
