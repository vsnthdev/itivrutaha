import chalk from 'chalk'
import { itivrutaha } from '../dist/index.js'

const log = itivrutaha({
    theme: `:time ${chalk.gray.dim('•')} :emoji :type :msg`,
    timeFormat: 'hh:mm:ss dd-MM-yyyy',
    scopes: ['app'],
    types: [
        {
            name: 'error',
            emoji: 'x',
            color: chalk.redBright
        },
        {
            name: 'warning',
            emoji: 'construction',
            color: chalk.yellowBright
        }
    ]
})

log.error('a simple error message')
log.warning('a simple warning message')