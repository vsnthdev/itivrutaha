<h1 align="center">
    <img src="https://github.com/vasanthdeveloper/itivrutaha/blob/designs/header.png?raw=true" alt="itivrutaha">
</h1>
<h4 align="center">( इतिवृत्तः ) — Logging system ✍ for Node.js with 🍬 theming and file 🗃 logging support.</h4>
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

## 🚴‍♂️ Quick Start
After installing `itivrutaha` using the above commands, you can use it in the following way:

```javascript
import itivrutaha from 'itivrutaha'

// create a new instance of the logger
const logger = await itivrutaha.createNewLogger({
    // optional configuration
})

// examples of logging with itivrutaha
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