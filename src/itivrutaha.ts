/*
 *  Contains an exportable logger function.
 *  Created On 29 October 2023
 */

import { render } from './renderer.js'
import { type Config, type UnifiedData } from './config.js'

export function itivrutaha<Scope extends string, LogTypeName extends string>(config: Config<Scope, LogTypeName>) {
    // calculate the log type filter values at load
    const typeFilter = config.typeFilterFn()

    type Signature = (msgOrData: string | UnifiedData<Scope> | Error, data?: any, scope?: Scope) => void

    type ReturnSignature = {
        [Type in LogTypeName]: Signature
    }

    // return all the log functions
    return config.types.reduce((previous, current) => ({
        ...previous,
        [current.name]: render(config, current, typeFilter)
    }), {}) as ReturnSignature
}

export type ExtractScopes<T> = T extends ReturnType<typeof itivrutaha<infer S extends string, any>> ? S : never
