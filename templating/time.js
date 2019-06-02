'use strict';

// [NOTE]: This file will render the :time variable in the theme
// By reading the format from the configuration

// Require the third-party node modules
const chalk = require('chalk');
const dateformat = require('dateformat');

// The function that will render the time
function renderTime(config) {
    // The variable that will be the actual time
    let returnableTime = dateformat(new Date(), config.timeFormat);

    // Dim the time if colored is set to true
    if (config.colored == true) {
        returnableTime = chalk.dim(returnableTime);
    }

    // Return the time value
    return returnableTime;
}

// Export the renderTime function
module.exports = renderTime;