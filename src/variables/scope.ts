/*
 *  Renders ":scope" variable with the current log line's scope.
 *  Created On 15 January 2024
 */

import { type Config } from '../config.js'

export function scope<ScopeName, LogTypeName extends string>(config: Config<ScopeName, LogTypeName>, scopeName?: ScopeName) {
    const scope = scopeName ? config.scopes.find(sco => sco.name == scopeName) : config.scopes[0]
    return scope.color(scope.name)
}
