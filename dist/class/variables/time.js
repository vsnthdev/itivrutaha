import chalk from 'chalk';
import { DateTime } from 'luxon';
export default (config) => config.theme.colored
    ? chalk.gray.dim(DateTime.local().toFormat(config.theme.timeFormat))
    : DateTime.local().toFormat(config.theme.timeFormat);
