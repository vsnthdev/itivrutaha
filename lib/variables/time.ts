// This file will render the :time variables

import dateformat = require('dateformat')

import { ConfigImpl } from '../config'

export default function timeRender(loggerConfig: ConfigImpl): string {
    // Get the current time
    const now = new Date()

    // Return the formatted date
    return dateformat(now, loggerConfig.timeFormat)
}