import ne from 'node-emoji';
import path from 'path';
import emoji from './variables/emoji.js';
import time from './variables/time.js';
import type from './variables/type.js';
export default (typeStr, msg, config) => config.theme.string
    .replace(':type', type(typeStr, config))
    .replace(':message', ne.emojify(msg))
    .replace(':time', time(config))
    .replace(':filename', path.basename(process.argv[1]))
    .replace(':node_path', process.argv[0])
    .replace(':script_path', process.argv[1])
    .replace(':node_version', process.version)
    .replace(':emoji', emoji(typeStr));
