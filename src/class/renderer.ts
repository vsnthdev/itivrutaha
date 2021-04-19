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

        // <!-- docs -->
        // The time of the log message. A [Luxon](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens) format string can be given as `theme.timeFormat` to change the formatting.
        .replace(':time', time(config))

        // Emoji according to the message type.
        .replace(':emoji', emoji(typeStr))

        // Log message in terminal's default color.
        .replace(':message', ne.emojify(msg))

        // Full path to Node.js executable.
        .replace(':node_path', process.argv[0])

        // Message type (ie. info, warning, error, etc).
        .replace(':type', type(typeStr, config))

        // Full path of the Node.js entry JavaScript file.
        .replace(':script_path', process.argv[1])

        // Version of Node.js running.
        .replace(':node_version', process.version)

        // Version of V8 engine running along with Node.js.
        .replace(':v8_version', process.versions.v8)

        // Filename of the Node.js entryfile.
        .replace(':filename', path.basename(process.argv[1]))

        // Version of OpenSSL running along with Node.js.
        .replace(':openssl_version', process.versions.openssl)

        // Version of Electron.js running. Returns `undefined` if not Electron.
        .replace(':electron_version', process.versions.electron)
