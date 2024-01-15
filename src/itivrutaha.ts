/*
 *  Contains an exportable logger function.
 *  Created On 29 October 2023
 */

import { ChalkInstance } from "chalk"

interface LogType<Name> {
    name: Name
    color: ChalkInstance
}

interface Config<Scope, LogTypeName> {
    scopes: Scope[]
    types: LogType<LogTypeName>[]
}

interface UnifiedData<Scope> {
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

    // function error(data: UnifiedData<Scope>): void
    // function error(msg: string, scope?: Scope, data?: any): void

    // function error(msgOrData: UnifiedData<Scope> | string, scope?: Scope, data?: any) {
    //     // 
    // }

    return {} as ReturnSignature
}
