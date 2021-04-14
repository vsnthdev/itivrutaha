import { DateTime } from 'luxon';
export default (config) => DateTime.local().toFormat(config.timeFormat);
