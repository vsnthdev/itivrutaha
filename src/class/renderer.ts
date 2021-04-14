/*
 *  This file will replace all the placeholders with real values.
 *  Created On 12 October 2019
 */

import path from 'path'

import { ConfigImpl } from '../config.js'
import timeRender from './variables/time.js'
import typeRender from './variables/type.js'

const getType = (): string =>
    new Error().stack.split('\n')[3].trim().slice(10).split(' ')[0]

export default (message: string, config: ConfigImpl): string => {
    return (
        config.theme
            // Render the message type
            .replace(':type', typeRender(getType(), config))

            // Render the message string
            .replace(':message', message)

            // Render the time string
            .replace(':time', timeRender(config))

            // Render the filename string
            .replace(':filename', path.basename(process.argv[1]))

            // Render the node_path variable
            .replace(':node_path', process.argv[0])

            // Render the script_path variable
            .replace(':script_path', process.argv[1])

            // Render the node_version variable
            .replace(':node_version', process.version)
    )
}
