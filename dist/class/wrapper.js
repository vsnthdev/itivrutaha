import writeLog from './log.js';
import renderer from './renderer.js';
const getType = () => new Error().stack.split('\n')[3].trim().slice(10).split(' ')[0];
export default ({ msg, type, data, config, exitCode, condition, }) => {
    const showOutput = condition ? condition(config) : true;
    if (!type)
        type = getType();
    if (typeof msg == 'object')
        msg = msg.message;
    const log = renderer(type, msg, config);
    writeLog(log, type, config, data);
    if (!showOutput)
        return;
    if (config.quietIdentifier.some(argument => process.argv.includes(argument)) == false) {
        console.log(log);
    }
    if (exitCode)
        process.exit(exitCode);
};
