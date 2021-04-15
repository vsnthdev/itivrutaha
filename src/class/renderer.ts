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
        .replace(':type', type(typeStr, config))
        .replace(':message', ne.emojify(msg))
        .replace(':time', time(config))
        .replace(':filename', path.basename(process.argv[1]))
        .replace(':node_path', process.argv[0])
        .replace(':script_path', process.argv[1])
        .replace(':node_version', process.version)
        .replace(':emoji', emoji(typeStr))
