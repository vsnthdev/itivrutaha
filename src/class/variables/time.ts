/*
 *  This file will render the ":time" variable.
 *  Created On 12 October 2019
 */

import { DateTime } from 'luxon'

import { ConfigImpl } from '../../config.js'

export default (config: ConfigImpl): string =>
    DateTime.local().toFormat(config.timeFormat)
