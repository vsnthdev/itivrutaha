/*
 *  Contains an exportable logger function.
 *  Created On 29 October 2023
 */

import { type Config, type UnifiedData } from './config.js'
import { render } from './renderer.js'

export function itivrutaha<Scope extends string, LogTypeName extends string>(config: Config<Scope, LogTypeName>) {
    // calculate the log type filter values at load
    const typeFilter = config.typeFilterFn()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ExtractScopes<T> = T extends ReturnType<typeof itivrutaha<infer S extends string, any>> ? S : never
