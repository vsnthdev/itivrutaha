<h5 align="center">
    <img src="https://github.com/vasanthdeveloper/itivrutaha/blob/designs/header.png?raw=true" alt="itivrutaha">
</h5>
<p align="center"><strong>( इतिवृत्तः ) — Logging system ✍ for Node.js with 🍬 theming and file 🗃 logging support.</strong></p>
<p align="center">
    <a target="_blank" rel="noopener" href="https://www.npmjs.com/package/itivrutaha">
        <img src="https://img.shields.io/npm/v/itivrutaha.svg?style=flat-square" alt="">
    </a>
    <a target="_blank" rel="noopener" href="https://www.npmjs.com/package/itivrutaha?activeTab=versions">
        <img src="https://img.shields.io/npm/dm/itivrutaha.svg?style=flat-square" alt="">
    </a>
    <a href="https://github.com/vasanthdeveloper/itivrutaha/issues">
        <img src="https://img.shields.io/github/issues/vasanthdeveloper/itivrutaha.svg?style=flat-square" alt="">
    </a>
    <a href="https://github.com/vasanthdeveloper/itivrutaha/commits/main">
        <img src="https://img.shields.io/github/last-commit/vasanthdeveloper/itivrutaha.svg?style=flat-square"
            alt="">
    </a>
</p>
<br>

<!-- header -->

**itivrutaha** is my first ever JavaScript (initially) project. It is a console logging module for Node.js to be used in CLIs, GUI desktop frameworks (like <a href="https://github.com/electron/electron" target="_blank" rel="noopener">Electron</a> & <a href="https://github.com/nodegui/nodegui" target="_blank" rel="noopener">NodeGUI</a>) and for web servers.

> Tweet me <a target="_blank" rel="noopener" href="https://vas.cx/twitter">@vasanthdevelop</a>, I would love to know your opinion/experience on this project 😍

## ⚡️ Features

1. Save logs to files
2. Create multiple loggers with context
3. Flexible theming support with <a href="https://www.npmjs.com/package/chalk" target="_blank" rel="noopener">chalk</a>
4. Terminal emoji support
5. Written in TypeScript

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
logger.error('Ouch!')
logger.note('Point to be noted')
logger.okay('Not an info message')
logger.success('Makes users happy')
logger.info('Nice to know something is happening')
logger.verbose("Always makes developer's life easy")
```

To know more configuration options like **file logging**, **themes**, and **time formatting** see the [customization page](docs/Customization.md).

## 🛠 Building

* `npm install` — Installs all dependencies.
* `npm run dev` — Builds TypeScript and docs automatically upon save.
* `npm run build` — Deletes existing build files & freshly compiles TypeScript code.
* `npm run docs` — Deletes existing docs and freshly builds by reading code.

**Note:** Run `node src/example.js` to test `itivrutaha` with the latest compiled code.

<!-- footer -->

## 📰 License
> The **itivrutaha** project is released under the [MIT license](https://github.com/vasanthdeveloper/itivrutaha/blob/main/LICENSE.md). <br> Developed &amp; maintained By Vasanth Srivatsa. Copyright 2021 © Vasanth Developer.
<hr>

> <a href="https://vasanth.tech" target="_blank" rel="noopener">vasanth.tech</a> &nbsp;&middot;&nbsp;
> YouTube <a href="https://vas.cx/videos" target="_blank" rel="noopener">@vasanthdeveloper</a> &nbsp;&middot;&nbsp;
> Twitter <a href="https://vas.cx/twitter" target="_blank" rel="noopener">@vasanthdevelop</a> &nbsp;&middot;&nbsp;
> Discord <a href="https://vas.cx/discord" target="_blank" rel="noopener">Vasanth Developer</a>