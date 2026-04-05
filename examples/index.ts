/*
 *  Example usage of itivrutaha logger
 *  Created On 05 April 2026
 */

import { defaultConfig, itivrutaha } from '../src/index.js'

const log = itivrutaha(defaultConfig)

log.error('some error', { err: new Error('Something broke!') })
log.info('nice info')
log.note('a useful note')
log.okay('it\'s okay')
log.success('that is a success')
log.verbose('useful for developers')
log.warning('something is going wrong')