<h1 align="center">
    <br>
    <a href="#">
        <img src="https://raw.githubusercontent.com/vasanthdeveloper/itivrutaha/media/PNG/Hero%20Image.png"
            alt="itivrutaha">
    </a>
</h1>
<h4 align="center">itivrutaha is an open-source, dynamically modifiable logging system.</h4>
<p align="center">
    <a href="#">
        <img src="https://img.shields.io/npm/v/itivruttah.svg?style=flat-square" alt="">
    </a>
    <a href="#">
        <img src="https://img.shields.io/npm/dm/itivruttah.svg?style=flat-square" alt="">
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
    <a href="#-installation">Installation</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-issues">Issues</a> •
    <a href="LICENSE.md">License</a>
</p>

## 💿 Installation
![](https://nodei.co/npm/itivruttah.png?downloads=true&downloadRank=true&stars=true)
```
npm install --save itivrutaha
```
Or, if you are using Yarn, then
```
yarn add itivrutaha
```

#### For browser usage
Just link the below script tag:
```
<script src="https://unpkg.com/itivruttah@0.4.1/itivruttah.js" defer></script>
```

## 🚴‍♂️ Quick Start
After installing itivrutaha using the above commands, you can use it in the following way:

```javascript
// Require the itivrutaha logging system
const itivrutaha = require('itivrutaha');

// Log messages to the console
itivrutaha.success('Messages that make everyone happy');
itivrutaha.info('Can be configured to look anyway');
itivrutaha.okay('Not an info, but an okay for confirmation');
itivrutaha.verbose('Useful for developers');
itivrutaha.warning('Something needs to be taken care of');
itivrutaha.error('The worst happened');
```
To know what optional configuration options can be passed and how you can dynamically change the theme (layout of the log message) and styles, checkout the [customization page](#).

## 🐛 Issues
Feel free to raise an issue in this repository for any suggestions and bugfixes.

## ✔ Todo

- [x] Logging messages to the console
- [x] Dynamically modify the logging messages
- [ ] File logging support
- [ ] Browser support

## 📰 License
> _The itivrutaha project is released under the [MIT license](LICENSE.md). <br> Developed &amp; Maintained By Vasanth Developer. Copyright 2019 © Vasanth Developer._
<hr>

> [vasanthdeveloper.com](https://vasanthdeveloper.com) &nbsp;&middot;&nbsp;
> YouTube [@vasanthdeveloper](https://youtube.com/vasanthdeveloper?sub_confirmation=1) &nbsp;&middot;&nbsp;
> Twitter [@vasanthdevelope](https://twitter.com/vasanthdevelope)