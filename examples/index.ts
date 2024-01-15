import chalk from 'chalk'
import { itivrutaha } from '../dist/index.js'

const log = itivrutaha({
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

