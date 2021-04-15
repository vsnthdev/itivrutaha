import emoji from 'node-emoji';
const emojis = {
    okay: 'thumbsup',
    info: 'loudspeaker',
    error: 'x',
    note: 'memo',
    verbose: 'telescope',
    success: 'white_check_mark',
    warning: 'construction',
};
export default (type) => emoji.emojify(emojis[type]).trim();
