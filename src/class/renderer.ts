/*
 *  This file will replace all the placeholders with real values.
 *  Created On 12 October 2019
 */

import ne from 'node-emoji'
import path from 'path'

import { ConfigImpl } from '../config.js'
import emoji from './variables/emoji.js'
import time from './variables/time.js'
import type from './variables/type.js'

export default (typeStr: string, msg: string, config: ConfigImpl): string =>
    config.theme.string
        .replace(':time', time(config))
        .replace(':emoji', emoji(typeStr))
        .replace(':message', ne.emojify(msg))
        .replace(':node_path', process.argv[0])
        .replace(':type', type(typeStr, config))
        .replace(':script_path', process.argv[1])
        .replace(':node_version', process.version)
        .replace(':v8_version', process.versions.v8)
        .replace(':filename', path.basename(process.argv[1]))
        .replace(':openssl_version', process.versions.openssl)
        .replace(':electron_version', process.versions.electron)
