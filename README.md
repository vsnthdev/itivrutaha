<h1 align="center"><a href="https://itivrutaha.vasanthdeveloper.com"><img src="https://raw.githubusercontent.com/vasanthdeveloper/itivrutaha/media/PNG/Hero%20Image.png" alt="itivrutaha"></a></h1>

<p align="center"><b>itivrutaha is an open-source, dynamically modifiable logging system for NodeJS.</b></p>
<p align="center">
    <a href="https://npmjs.com/package/itivrutaha"><img src="https://img.shields.io/npm/v/itivrutaha.svg?style=flat-square" alt="npmjs"></a>
    <a href="https://github.com/vasanthdeveloper/itivrutaha/releases"><img src="https://img.shields.io/npm/dm/itivrutaha.svg?style=flat-square" alt="releases"></a>
    <a href="https://github.com/vasanthdeveloper/itivrutaha/issues"><img src="https://img.shields.io/github/issues/vasanthdeveloper/itivrutaha.svg?style=flat-square" alt="issues"></a>
    <a href="https://github.com/vasanthdeveloper/itivrutaha/commits/mainline"><img src="https://img.shields.io/github/last-commit/vasanthdeveloper/itivrutaha.svg?style=flat-square"
            alt="commits"></a>
</p>
<p align="center">
    <a href="#">Docs</a> •
    <a href="#-installation">Installation</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-contributions--issues">Support</a> •
    <a href="LICENSE.md">License</a>
</p>

`itivrutaha` tries to be an easy to configure logging system with support for log messages to be dynamically configured and created at runtime.

> Tweet me [@vasanthdevelope](https://vasanth.tech/twitter) and share your opinion and experience with this project 😃

## 💿 Installation
![](https://nodei.co/npm/itivrutaha.png?downloads=true&downloadRank=true&stars=true)
```
npm install itivrutaha
```
Or, if you are using Yarn, then
```
yarn add itivrutaha
```

## 🚀 Quick Start
After installing `itivrutaha` using the above command(s), you can use it in the following way:

```javascript
// Require the itivrutaha logging system
const itivrutaha = require('itivrutaha')

// Create a new instance of the Logger
let logger = itivrutaha.createNewLogger({
    // Optional configuration
})

// Examples of logging with itivrutaha
logger.success('Always makes users happy')
logger.note('Point to be noted')
logger.info('User knows something is happening')
logger.okay('Not an info message')
logger.verbose('Always makes developer\'s live easy')
logger.error('Should never happen')
```
<!-- TODO: Write an article about how to customize log messages using itivrutaha -->
To know what optional configuration options can be passed and how you can dynamically change the theme (layout of the log message) and styles, checkout the [this article](#) on my website. You can also checkout the [example file](example/example.js) to know a general implementation of the logger.

## ✔ Todo
- [x] Logging messages to the console
- [x] Dynamically create new types of logging messages
- [ ] Ability to invert the colors of log message types
- [ ] Ability to have spaced padding to log message types
- [ ] Symbols support
- [ ] Asynchronously write logs to files

# 🔬 Contributions & Issues
All _pull requests_ are welcome! If you would like to discuss more about the project, you can join my Discord server or message me directly via Telegram/Twitter.

# 🎉 Support
I work 24x7 on projects like this, and make educational computer videos. Although I don't do this for making money. Money is required, for me to live and eat as well as buy equipment and continue to maintain projects like this. If you have a heart 💖 and value my efforts. Please donate me a small amount through PayPal or become my valued patron over at Patreon.

<a target="_blank" rel="noopener" href="https://vasanth.tech/patreon"><img height="32px" src="https://github.com/vasanthdeveloper/nitya/blob/media/PNG/patreon_button.png?raw=true"></a>
<a target="_blank" rel="noopener" href="https://vasanth.tech/paypal"><img height="32px" src="https://github.com/vasanthdeveloper/nitya/blob/media/PNG/paypal_button.png?raw=true"></a>

## 📰 License
> _The itivrutaha project is released under the [MIT license](LICENSE.md). <br> Developed &amp; Maintained By Vasanth Developer. Copyright 2020 © Vasanth Developer._
<hr>

> [vasanth.tech](https://vasanth.tech) &nbsp;&middot;&nbsp;
> YouTube [@vasanthdeveloper](https://vasanth.tech/youtube) &nbsp;&middot;&nbsp;
> Twitter [@vasanthdevelope](https://vasanth.tech/twitter) &nbsp;&middot;&nbsp;
> Discord [Vasanth Developer](https://vasanth.tech/discord)