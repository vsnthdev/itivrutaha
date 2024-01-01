/*
 *  Contains an exportable logger function.
 *  Created On 29 October 2023
 */

interface Config {
    level: 'minimal' | 'normal' | 'verbose'
    scopes: unknown
}

const defaults: Config = {
    level: 'minimal',
    scopes: 'def'
}

export function itivrutaha(config?: Config) {
    const conf = { ...defaults, ...config }

    return {
        error(msg: string, scope: typeof conf.scopes, data: any) {
            if (!['minimal', 'normal', 'verbose'].includes(conf.level)) return

            console.log({ msg, scope, data })
        },

        warning() {
            if (!['minimal', 'normal', 'verbose'].includes(conf.level)) return

            console.log('log an warning message')
        },

        success() {
            if (!['normal', 'verbose'].includes(conf.level)) return

            console.log('log an success message')
        },

        okay() {
            if (!['normal', 'verbose'].includes(conf.level)) return

            console.log('log an okay message')
        },

        note() {
            if (!['normal', 'verbose'].includes(conf.level)) return

            console.log('log an note message')
        },

        info() {
            if (!['normal', 'verbose'].includes(conf.level)) return

            console.log('log an info message')
        },

        debug() {
            if (!['verbose'].includes(conf.level)) return

            console.log('log an debug message')
        },

        verbose() {
            if (!['verbose'].includes(conf.level)) return

            console.log('log an verbose message')
        },
    }
}
