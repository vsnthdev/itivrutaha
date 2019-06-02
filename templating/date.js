'use strict';

// [NOTE]: This file will render the :date variable in the theme
// By reading the format from the configuration

// Require the third-party node modules
const chalk = require('chalk');
const dateformat = require('dateformat');

// The function that will render the date
function renderDate(config) {
    // The variable that will be the actual date
    let dateString = dateformat(new Date(), config.dateFormat);

    // Dim the date if colored is set to true
    if (config.colored == true) {
        dateString = chalk.dim(dateString);
    }

    // Return the date value
    return config.theme.replace(':date', dateString);
}

// Export the renderDate function
module.exports = renderDate;