'use strict';

// [INFO]: This file will render the log message template and give a string
// Which we can console.log

// The function that will render a theme
function renderTheme(type, message, config) {
    // Return the rendered message string
    return config.theme

    // Render the :type variable in the template
    .replace(':type', require('./type')(type, config))

    // Render the :date variable in the template
    .replace(':time', require("./time")(config))

    // Render the :filename variable in the template
    .replace(':filename', require('./filename'))

    // Render the :message variable in the template
    .replace(':message', message);
}

// Export the renderTheme function
module.exports = {
    renderTheme: renderTheme
}