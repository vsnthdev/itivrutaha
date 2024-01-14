import { itivrutaha } from '../dist/index.js'

const log = itivrutaha({
    scopes: ['app']
})

log.error('err message here', 'app', { something: 'value' })