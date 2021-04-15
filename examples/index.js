import itivrutaha from '../dist/itivrutaha.js'

const logger = itivrutaha.createNewLogger({
    theme: ':time :emoji :type :message',
})

logger.error('some error')
logger.info('nice info')
logger.note('a useful note')
logger.okay(`it's okay`)
logger.success('that is a success')
logger.verbose('useful for developers')
logger.warning('something is going wrong')
