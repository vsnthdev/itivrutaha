'use strict';

// [NOTE]: This file will render the :filename variable

// Require the node builtin modules
const path = require('path');

// The function that will render the filename
function renderFilename() {
    // Return the filename
    return path.basename(process.mainModule.filename);
}

// Export the renderFilename function
module.exports = renderFilename;