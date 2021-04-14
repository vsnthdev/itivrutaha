<h1 align="center">
    <br>
    <a href="#">
        itivrutaha
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

## 💿 Installation
![](https://nodei.co/npm/itivrutaha.png?downloads=true&downloadRank=true&stars=true)
```
npm i itivrutaha
```
Or, if you are using Yarn, then
```
yarn add itivrutaha
```

## 🚴‍♂️ Quick Start
After installing `itivrutaha` using the above commands, you can use it in the following way:

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

## 📰 License
> The **itivrutaha** project is released under the [MIT license](LICENSE.md). <br> Developed &amp; maintained By Vasanth Srivatsa. Copyright 2021 © Vasanth Developer.
<hr>

> <a href="https://vasanth.tech" target="_blank" rel="noopener">vasanth.tech</a> &nbsp;&middot;&nbsp;
> YouTube <a href="https://vas.cx/videos" target="_blank" rel="noopener">@vasanthdeveloper</a> &nbsp;&middot;&nbsp;
> Twitter <a href="https://vas.cx/twitter" target="_blank" rel="noopener">@vasanthdevelop</a> &nbsp;&middot;&nbsp;
> Discord <a href="https://vas.cx/discord" target="_blank" rel="noopener">Vasanth Developer</a>