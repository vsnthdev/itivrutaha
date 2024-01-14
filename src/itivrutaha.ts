/*
 *  Contains an exportable logger function.
 *  Created On 29 October 2023
 */

interface Config<Scope> {
    scopes: Scope[]
}

interface UnifiedData<Scope> {
    scope?: Scope
    msg: string
    [key: string]: any
}

export function itivrutaha<Scope extends string>(config: Config<Scope>) {
    function error(data: UnifiedData<Scope>): void
    function error(msg: string, scope?: Scope, data?: any): void

    function error(msgOrData: UnifiedData<Scope> | string, scope?: Scope, data?: any) {
        // 
    }

    return {
        error,
    }
}
