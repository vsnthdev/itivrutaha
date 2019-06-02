'use strict';

// [INFO]: This file will render the log message template and give a string
// Which we can console.log

// The function that will render a theme
function renderTheme(type, message, config) {
    // Render the :type variable in the template
    let renderedMessage = require('./type')(type, config);

    // Render the :date variable in the template
    renderedMessage = require("./date")(config);

    // Render the :message variable in the template
    renderedMessage = renderedMessage.replace(':message', message);
    
    // Return the rendered message string
    return renderedMessage;
}

// Export the renderTheme function
module.exports = {
    renderTheme: renderTheme
}