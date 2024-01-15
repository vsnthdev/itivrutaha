/*
 *  Contains an exportable logger function.
 *  Created On 29 October 2023
 */

import { ChalkInstance } from "chalk"
import { render } from "./renderer.js"

export interface IScope<ScopeName> {
    name: ScopeName
    color: ChalkInstance
}

export interface LogType<Name> {
    name: Name
    emoji: string
    color: ChalkInstance
}

export interface Config<ScopeName, LogTypeName> {
    theme: string
    timeFormat: string
    scopes: IScope<ScopeName>[]
    types: LogType<LogTypeName>[]
}

export interface UnifiedData<ScopeName> {
    scope?: ScopeName
    msg: string
    [key: string]: any
}

export function itivrutaha<Scope extends string, LogTypeName extends string>(config: Config<Scope, LogTypeName>) {
    type Types = typeof config['types'][0]['name']
    type Signature = (msgOrData: string | UnifiedData<Scope>, data?: any, scope?: Scope) => void

    type ReturnSignature = {
        [Type in Types]: Signature
    }

    // return all the log functions
    return config.types.reduce((previous, current) => ({
        ...previous,
        [current.name]: render(config, current)
    }), {}) as ReturnSignature
}
