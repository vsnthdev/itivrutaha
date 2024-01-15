/*
 *  Contains an exportable logger function.
 *  Created On 29 October 2023
 */

import { ChalkInstance } from "chalk"
import { render } from "./renderer.js"

export interface LogType<Name> {
    name: Name
    emoji: string
    color: ChalkInstance
}

export interface Config<Scope, LogTypeName> {
    theme: string
    timeFormat: string
    scopes: Scope[]
    types: LogType<LogTypeName>[]
}

export interface UnifiedData<Scope> {
    scope?: Scope
    msg: string
    [key: string]: any
}

export function itivrutaha<Scope extends string, LogTypeName extends string>(config: Config<Scope, LogTypeName>) {
    type Types = typeof config['types'][0]['name']
    type Signature = (msgOrData: string | UnifiedData<Scope>, scope?: Scope, data?: any) => void

    type ReturnSignature = {
        [Type in Types]: Signature
    }

    // return all the log functions
    return config.types.reduce((previous, current) => ({
        ...previous,
        [current.name]: render(config, current)
    }), {}) as ReturnSignature
}
