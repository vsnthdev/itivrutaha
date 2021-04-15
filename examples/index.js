import itivrutaha from '../dist/itivrutaha.js'

const logger = await itivrutaha.createNewLogger({
    theme: {
        string: ':time :emoji :type :message',
    },
    logs: {
        enable: true,
    },
})

logger.error('some error')
logger.info('nice info')
logger.note('a useful note')
logger.okay(`it's okay`)
logger.success('that is a success')
logger.verbose('useful for developers')
logger.warning('something is going wrong')

setTimeout(async () => {
    await itivrutaha.clearLogs(logger)
}, 3000)
