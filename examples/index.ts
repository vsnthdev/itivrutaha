import chalk from 'chalk'
import { itivrutaha } from '../dist/index.js'

const log = itivrutaha({
    theme: `:time ${chalk.gray.dim('•')} :emoji :type :message`,
    timeFormat: 'hh:mm:ss dd-MM-yyyy',
    scopes: ['app'],
    types: [
        {
            name: 'error',
            color: chalk.redBright
        },
        {
            name: 'warning',
            color: chalk.yellowBright
        }
    ]
})

log.error('hello world')