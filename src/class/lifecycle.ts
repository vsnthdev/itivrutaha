/*
 *  Logs when application starts or stops.
 *  Created On 15 April 2021
 */

import ctl from 'clear-terminal-line'
import { DateTime } from 'luxon'
import cleanup from 'node-cleanup'

import { ConfigImpl, DataImpl } from '../config'
import { close } from './log.js'
import render from './wrapper.js'

const startup = (config: ConfigImpl, data: DataImpl): void => {
    render({
        data,
        config,
        msg: `${config.appName} startup`,
        type: 'note',
        condition: () => config.bootLog,
    })

    render({
        data,
        config,
        msg: `Started on ${DateTime.local().toFormat(
            'hh:mm:ss a, LLL dd yyyy',
        )}`,
        type: 'info',
        condition: () => config.bootLog,
    })
}

const shutdown = (config: ConfigImpl, data: DataImpl, signal: string): void => {
    const now = DateTime.local().diff(data.startedOn, [
        'days',
        'hours',
        'minutes',
        'seconds',
        'milliseconds',
    ])

    const time = []
    now.days && time.push(`${Math.round(now.days)} days`)
    now.hours && time.push(`${Math.round(now.hours)} hours`)
    now.minutes && time.push(`${Math.round(now.minutes)} minutes`)
    now.seconds && time.push(`${Math.round(now.seconds)} seconds`)
    now.milliseconds && time.push(`${Math.round(now.milliseconds)} ms`)

    if (signal == 'SIGINT' && config.clearOnSIGINT) {
        ctl()
        process.stdout.write('\r')
    }

    render({
        data,
        config,
        msg: `Bye 👋 ran for ${time.slice(-3).join(', ')}`,
        type: 'info',
        condition: () => config.shutdownLog,
    })

    render({
        data,
        config,
        msg: `${config.appName} shutdown`,
        type: 'note',
        condition: () => config.shutdownLog,
    })

    close(true, data)
}

export default (config: ConfigImpl, data: DataImpl): void => {
    startup(config, data)
    cleanup((exitCode, signal) => {
        shutdown(config, data, signal)
    })
}
