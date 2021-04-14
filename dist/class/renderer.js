import path from 'path';
import timeRender from './variables/time.js';
import typeRender from './variables/type.js';
const getType = () => new Error().stack.split('\n')[3].trim().slice(10).split(' ')[0];
export default (message, config) => {
    return (config.theme
        .replace(':type', typeRender(getType(), config))
        .replace(':message', message)
        .replace(':time', timeRender(config))
        .replace(':filename', path.basename(process.argv[1]))
        .replace(':node_path', process.argv[0])
        .replace(':script_path', process.argv[1])
        .replace(':node_version', process.version));
};
