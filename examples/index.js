import itivrutaha from '../dist/itivrutaha.js'

const logger = itivrutaha.createNewLogger({
    theme: ':time :type :message',
})

logger.info('hey 👋')
logger.verbose('useful to developers')
