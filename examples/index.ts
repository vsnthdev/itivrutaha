import chalk from 'chalk'
import { itivrutaha } from '../dist/index.js'

const log = itivrutaha({
    theme: `:time ${chalk.gray.dim('•')} :scope :emoji :type :msg :data`,
    timeFormat: 'hh:mm:ss dd-MM-yyyy',
    scopes: [
        {
            name: 'app',
            color: chalk.redBright
        },
        {
            name: 'web',
            color: chalk.cyanBright
        }
    ],
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
log.warning('a simple warning message', {
    hello: {
        works: false,
        some: 'wow!'
    },
    world: '🎊'
})

log.error({
    msg: 'hellow rold',
    scope: 'app'
})

log.warning({
    msg: 'wow!',
    scope: 'web'
})