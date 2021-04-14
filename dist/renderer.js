import * as path from 'path';
import timeRender from './variables/time';
import typeRender from './variables/type';
export default function renderTheme(type, message, loggerConfig) {
    return (loggerConfig.theme
        .replace(':type', typeRender(type, loggerConfig))
        .replace(':message', message)
        .replace(':time', timeRender(loggerConfig))
        .replace(':filename', path.basename(process.argv[1]))
        .replace(':node_path', process.argv[0])
        .replace(':script_path', process.argv[1])
        .replace(':node_version', process.version));
}
