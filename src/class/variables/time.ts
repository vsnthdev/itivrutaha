/*
 *  This file will render the ":time" variable.
 *  Created On 12 October 2019
 */

import chalk from 'chalk'
import { DateTime } from 'luxon'

import { ConfigImpl } from '../../config.js'

export default (config: ConfigImpl): string =>
    config.theme.colored
        ? chalk.gray.dim(DateTime.local().toFormat(config.theme.timeFormat))
        : DateTime.local().toFormat(config.theme.timeFormat)
