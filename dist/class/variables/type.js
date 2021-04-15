import chalk from 'chalk';
const bold = (type, config) => config.theme.boldType ? chalk.bold(type) : type;
const colorize = (type, config) => {
    if (!config.theme.colored)
        return bold(type, config);
    const colors = {
        okay: chalk.gray,
        info: chalk.blueBright,
        error: chalk.redBright,
        note: chalk.magentaBright,
        verbose: chalk.cyanBright,
        success: chalk.greenBright,
        warning: chalk.yellowBright,
    };
    return bold(colors[type](type), config);
};
const casing = (type, config) => {
    const toTitleCase = (str) => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    const func = {
        0: (str) => str.toUpperCase(),
        1: (str) => str.toLowerCase(),
        2: (str) => toTitleCase(str),
    };
    return colorize(func[config.theme.typeCase](type), config);
};
export default (type, config) => casing(type, config);
