import { defaultConfig, itivrutaha } from '../dist/index.js'

const log = itivrutaha(defaultConfig)

log.error('some error')
log.info('nice info')
log.note('a useful note')
log.okay(`it's okay`)
log.success('that is a success')
log.verbose('useful for developers')
log.warning('something is going wrong')