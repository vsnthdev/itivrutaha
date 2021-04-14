import renderer from './renderer.js';
const getType = () => new Error().stack.split('\n')[3].trim().slice(10).split(' ')[0];
export default ({ msg, config, exitCode, condition, }) => {
    const goForward = condition ? condition(config) : true;
    if (!goForward)
        return;
    if (typeof msg == 'object')
        msg = msg.message;
    console.log(renderer(getType(), msg, config));
    if (exitCode)
        process.exit(exitCode);
};
