'use strict';

// [INFO]: This file will render the log message template and give a string
// Which we can console.log

// The function that will render a theme
function renderTheme(type, message, config) {
    // Render the :type variable in the template
    let renderedMessage = require('./type')(type, config);

    console.log(renderedMessage);
}

// Export the renderTheme function
module.exports = {
    renderTheme: renderTheme
}