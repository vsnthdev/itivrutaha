/*
 *  A wrapper function that handles all specifics
 *  before passing data to the render function.
 *  Created On 14 April 2021
 */
import writeLog from './log.js';
import renderer from './renderer.js';
const getType = () => new Error().stack.split('\n')[3].trim().slice(10).split(' ')[0];
export default ({ msg, type, data, config, exitCode, condition, }) => {
    // check if there's a condition
    const showOutput = condition ? condition(config) : true;
    // set the type, incase it isn't already
    if (!type)
        type = getType();
    // handle if Error or message string
    if (typeof msg == 'object')
        msg = msg.message;
    // render the log message
    const log = renderer(type, msg, config);
    writeLog(log, type, config, data);
    if (!showOutput)
        return;
    if (config.quietIdentifier.some(argument => process.argv.includes(argument)) == false) {
        console.log(log);
    }
    // handle the exitCode
    if (exitCode)
        process.exit(exitCode);
};
