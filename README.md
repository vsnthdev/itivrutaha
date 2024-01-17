<h5 align="center">
    <img src="https://github.com/vsnthdev/itivrutaha/blob/designs/header.png?raw=true" alt="itivrutaha">
</h5>
<p align="center"><strong>( इतिवृत्तः ) — An 👌 easy-to-use, 🛠️ configurable, Bun-first ⚡ console logger.</strong></p>
<p align="center">
    <a target="_blank" rel="noopener" href="https://www.npmjs.com/package/itivrutaha">
        <img src="https://img.shields.io/npm/v/itivrutaha.svg?style=flat-square" alt="">
    </a>
    <a target="_blank" rel="noopener" href="https://www.npmjs.com/package/itivrutaha?activeTab=versions">
        <img src="https://img.shields.io/npm/dm/itivrutaha.svg?style=flat-square" alt="">
    </a>
    <a href="https://github.com/vsnthdev/itivrutaha/issues">
        <img src="https://img.shields.io/github/issues/vsnthdev/itivrutaha.svg?style=flat-square" alt="">
    </a>
    <a href="https://github.com/vsnthdev/itivrutaha/commits/main">
        <img src="https://img.shields.io/github/last-commit/vsnthdev/itivrutaha.svg?style=flat-square"
            alt="">
    </a>
</p>
<br>

**itivrutaha** is my first ever JavaScript *(initially)* project. It is a Bun-first *(developed, tested with [Bun](https://bun.sh) but also works in [Node](https://nodejs.org))* console logging module to be used in CLIs, GUI desktop apps & web servers.

> Tweet me <a target="_blank" rel="noopener" href="https://vas.cx/twitter">@vsnthdev</a>, I would love to know your opinion/experience on this project 😍

### 🚀 Migrating from v2.x

<!-- todo -->

## ⚡️ Features

1. Easy to customize according to your needs
2. Flexible theming support with [chalk](https://www.npmjs.com/package/chalk)

## 💿 Installation

```bash
bun i itivrutaha
npm i itivrutaha # if you're using Node.js
```

## 🚴‍♂️ Quick Start
After `itivrutaha` has been installed, you start using it by the following way 👇

```typescript
import { itivrutaha, defaultConfig } from 'itivrutaha'

const log = itivrutaha(defaultConfig)

// errors can be given directly, logs nicely
log.error(new Error('Ouch!'))

// additional data can also be given for extra context
log.note('Point to be noted', { someData: 'very useful' })

// entire thing can also be an object
log.okay({
    msg: 'Not an info message'
})

// a scope can be attached to easily identify
// which part of the application this log came from
log.success('Makes users happy', {}, 'web')

// entire thing can also be an object
log.info({
    msg: 'Nice to know something is happening',
    scope: 'web',
    extra: 'data',
    maybeAnError: new Error('Something broke') // will be printed with trace
})

// supports emoji, colors and theming
log.verbose("Always makes developer's life easy 😀")
```

See below to know more about configuration options to customize the theme, add more log types, define scopes and much more!

## 🛠 Building

* `bun install` — Installs required dependencies.
* `bun run dev` — Watches for changes & runs TypeScript compiler.
* `bun run build` — Freshly compiles TypeScript code.
* `npm run docs` — Freshly builds by reading code and templates.

ℹ️ **Note:** You can run `bun run examples/index.ts` to test `itivrutaha` with the latest code.

## 📰 License
> The **itivrutaha** project is released under the [MIT license](https://github.com/vasanthdeveloper/itivrutaha/blob/main/LICENSE.md).
<hr>

> [vsnth.dev](https://vsnth.dev) &nbsp;&middot;&nbsp;
> YouTube [@vsnthdev](https://vas.cx/videos) &nbsp;&middot;&nbsp;
> Twitter [@vsnthdev](https://vas.cx/@vsnthdev) &nbsp;&middot;&nbsp;
> Discord [Vasanth Developer](https://vas.cx/@discord)