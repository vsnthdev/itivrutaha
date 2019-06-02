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

// The function that will log a success message
function logSuccess(message) {
    console.log(`${config.colored} ${message}`);
}

// Export the required functions
module.exports = {
    success: logSuccess,
    config: config
};