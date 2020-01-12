//   ___    __________   |  Vasanth Developer (Vasanth Srivatsa)
//   __ |  / /___  __ \  |  ------------------------------------------------
//   __ | / / __  / / /  |  https://github.com/vasanthdeveloper/itivrutaha.git
//   __ |/ /  _  /_/ /   |
//   _____/   /_____/    |  Example JavaScript implementation of itivrutaha
//                       |

// In your case you should be using:
// const itivrutaha = require('itivrutaha')
const itivrutaha = require('../src/itivrutaha')

// Create a new instance of the logger
const logger = itivrutaha.createNewLogger({
    boldType: true,
    typeCase: 0,
})

// Logging messages with itivrutaha
logger.success('Always makes users happy')
logger.note('Point to be noted')
logger.info('User will know something is happening')
logger.okay('Not an info message, but tells the user something')
logger.verbose('Always makes developer\'s lives easy')
logger.error('Should never happen')