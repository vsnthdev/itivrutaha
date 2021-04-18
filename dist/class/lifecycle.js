/*
 *  Logs when application starts or stops.
 *  Created On 15 April 2021
 */
import { DateTime } from 'luxon';
import cleanup from 'node-cleanup';
import { close } from './log.js';
import render from './wrapper.js';
const startup = (config, data) => {
    render({
        data,
        config,
        msg: `${config.appName} startup`,
        type: 'note',
        condition: () => config.bootLog,
    });
    render({
        data,
        config,
        msg: `Started on ${DateTime.local().toFormat('hh:mm:ss a, LLL dd yyyy')}`,
        type: 'info',
        condition: () => config.bootLog,
    });
};
const shutdown = (config, data) => {
    render({
        data,
        config,
        msg: `${config.appName} shutdown`,
        type: 'note',
        condition: () => config.shutdownLog,
    });
    render({
        data,
        config,
        msg: `Shutting down on ${DateTime.local().toFormat('hh:mm:ss a, LLL dd yyyy')}`,
        type: 'info',
        condition: () => config.shutdownLog,
    });
    close(true, data);
};
export default (config, data) => {
    startup(config, data);
    cleanup(() => {
        shutdown(config, data);
    });
};
