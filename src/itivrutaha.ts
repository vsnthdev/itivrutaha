/*
 *  Contains an exportable logger function.
 *  Created On 29 October 2023
 */

import { render } from './renderer.js'
import { type Config, type UnifiedData } from './config.js'

export function itivrutaha<Scope extends string, LogTypeName extends string>(config: Config<Scope, LogTypeName>) {
    type Types = typeof config['types'][0]['name']
    type Signature = (msgOrData: string | UnifiedData<Scope> | Error, data?: any, scope?: Scope) => void

    type ReturnSignature = {
        [Type in Types]: Signature
    }

    // return all the log functions
    return config.types.reduce((previous, current) => ({
        ...previous,
        [current.name]: render(config, current)
    }), {}) as ReturnSignature
}
