import writeLog from './log.js';
import renderer from './renderer.js';
const getType = () => new Error().stack.split('\n')[3].trim().slice(10).split(' ')[0];
export default ({ msg, type, data, config, exitCode, condition, }) => {
    const goForward = condition ? condition(config) : true;
    if (!goForward)
        return;
    if (!type)
        type = getType();
    if (typeof msg == 'object')
        msg = msg.message;
    const log = renderer(type, msg, config);
    console.log(log);
    writeLog(log, type, config, data);
    if (exitCode)
        process.exit(exitCode);
};
