#!/usr/bin/env node

//    ___    __________   |  Vasanth Srivatsa (Vasanth Developer)
//    __ |  / /___  __ \  |   -----------------------------------------------
//    __ | / / __  / / /  |  https://github.com/vasanthdeveloper/itivruttaha.git
//    __ |/ /  _  /_/ /   |
//    _____/   /_____/    |  ( इतिवृत्तः ) - A dynamic logging module written in JavaScript
//                        |


'use strict';

// Require this project's files
var config = require('./config');
const renderer = require('./templating/index');

// The function that will log a success message
function logSuccess(message) {
    // Render the template
    let renderedMessage = renderer.renderTheme('success', message, config);

    // Log the success message
    console.log(renderedMessage);
}

// The message that will log a info message
function logInfo(message) {
    // Render the template
    let renderedMessage = renderer.renderTheme('info', message, config);

    // Log the info message
    console.log(renderedMessage);
}

// The function that will log an okay message
function logOkay(message) {
    // Render the template
    let renderedMessage = renderer.renderTheme('okay', message, config);

    // Log the okay message
    console.log(renderedMessage);
}

// The function that will log a verbose mesage
// Only if the provided verbose flags are found
function logVerbose(message) {
    // The variable that will be left as false if none of the verbose flags were provided
    let logVerboseContinue = false;

    // Loop through each verbose flag
    config.verboseFlags.forEach(flag => {
        // Check if any verbose flags exists in process.argv
        if (process.argv.includes(flag)) {
            logVerboseContinue = true;
        }
    });

    // Only show the verbose message, if logVerboseContinue is true
    if (logVerboseContinue == true) {
        // Render the template
        let renderedMessage = renderer.renderTheme('verbose', message, config);

        // Log the okay message
        console.log(renderedMessage);
    }
}

// Export the required functions
module.exports = {
    success: logSuccess,
    info: logInfo,
    okay: logOkay,
    verbose: logVerbose,
    config: config
};