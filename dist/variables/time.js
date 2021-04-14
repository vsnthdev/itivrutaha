import dateformat from 'dateformat';
export default function timeRender(loggerConfig) {
    const now = new Date();
    return dateformat(now, loggerConfig.timeFormat);
}
