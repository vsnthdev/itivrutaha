// This file will render the :time variables

import { DateTime } from 'luxon'

import { ConfigImpl } from '../config.js'

export default (config: ConfigImpl): string =>
    DateTime.local().toFormat(config.timeFormat)
