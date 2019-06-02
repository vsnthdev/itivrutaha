'use strict';

// [NOTE]: This file will render the :bin variable

// Require the node builtin modules
const path = require('path');

// The function that will render the binary's filename
function renderBin() {
    // Return the binary's filename
    return path.basename(process.argv[0].toString());
}

// Export the renderNode function
module.exports = renderBin;