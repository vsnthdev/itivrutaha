'use strict';

// [INFO]: This file will render the log message template and give a string
// Which we can console.log

// The function that will render a theme
function renderTheme(message, config) {
    console.log(config);
}

// Export the renderTheme function
module.exports = {
    renderTheme: renderTheme
}