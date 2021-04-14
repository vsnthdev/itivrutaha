import path from 'path';
import timeRender from './variables/time.js';
import typeRender from './variables/type.js';
export default (type, msg, config) => {
    return (config.theme
        .replace(':type', typeRender(type, config))
        .replace(':message', msg)
        .replace(':time', timeRender(config))
        .replace(':filename', path.basename(process.argv[1]))
        .replace(':node_path', process.argv[0])
        .replace(':script_path', process.argv[1])
        .replace(':node_version', process.version));
};
