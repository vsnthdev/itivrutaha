// This file will replace all the placeholders with real values

import { ConfigImpl } from './config'
import typeRender from './variables/type'
import timeRender from './variables/time'

export default function renderTheme(type: string, message: string, loggerConfig: ConfigImpl): string {
    // Return the render result after rendering it
    return loggerConfig.theme

        // Render the message type
        .replace(':type', typeRender(type, loggerConfig))

        // Render the message string
        .replace(':message', message)

        // Render the time string
        .replace(':time', timeRender(loggerConfig))
}