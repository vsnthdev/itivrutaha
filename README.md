<h1 align="center">
    <br>
    <a href="#">
        <img src="https://raw.githubusercontent.com/vasanthdeveloper/itivrutaha/media/PNG/Hero%20Image.png"
            alt="itivrutaha">
    </a>
</h1>
<h4 align="center">itivrutaha is an open-source, dynamically modifiable logging system for NodeJS.</h4>
<p align="center">
    <a href="#">
        <img src="https://img.shields.io/npm/v/itivrutaha.svg?style=flat-square" alt="">
    </a>
    <a href="#">
        <img src="https://img.shields.io/npm/dm/itivrutaha.svg?style=flat-square" alt="">
    </a>
    <a href="#">
        <img src="https://img.shields.io/github/issues/vasanthdeveloper/itivrutaha.svg?style=flat-square" alt="">
    </a>
    <a href="#">
        <img src="https://img.shields.io/github/last-commit/vasanthdeveloper/itivrutaha.svg?style=flat-square"
            alt="">
    </a>
</p>
<p align="center">
    <a href="#">Docs</a> •
    <a href="#💿-installation">Installation</a> •
    <a href="#🚴♂️-quick-start">Quick Start</a> •
    <a href="LICENSE.md">License</a>
</p>

## 💿 Installation
![](https://nodei.co/npm/itivrutaha.png?downloads=true&downloadRank=true&stars=true)
```
npm install --save itivrutaha
```
Or, if you are using Yarn, then
```
yarn add itivrutaha
```

## 🚴‍♂️ Quick Start
After installing itivrutaha using the above commands, you can use it in the following way:

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
To know what optional configuration options can be passed and how you can dynamically change the theme (layout of the log message) and styles, checkout the [customization page](#).

## ✔ Todo

- [x] Logging messages to the console
- [x] Dynamically modify the logging messages
- [ ] File logging support

## 📰 License
> _The itivrutaha project is released under the [MIT license](LICENSE.md). <br> Developed &amp; Maintained By Vasanth Developer. Copyright 2019 © Vasanth Developer._
<hr>

> [vasanth.tech](https://vasanth.tech) &nbsp;&middot;&nbsp;
> YouTube [@vasanthdeveloper](https://youtube.com/vasanthdeveloper?sub_confirmation=1) &nbsp;&middot;&nbsp;
> Twitter [@vasanthdevelope](https://twitter.com/vasanthdevelope) &nbsp;&middot;&nbsp;
> Discord [Vasanth Developer](https://discord.gg/UQuhrxE)