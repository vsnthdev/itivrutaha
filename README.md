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

## 🚀 Migrating from v2.x

Version 3 is a complete rewrite with several features removed, trimmed down and optimized, while modernizing the codebase and adding Bun.js support.

The `v2.x.x` versions can be found in the [v2](https://github.com/vsnthdev/itivrutaha/tree/v2) branch containing the older version of `itivrutaha`.

### ⚠️ Major changes

1. Luxon has been replaced in favor of [date-format](https://www.npmjs.com/package/date-format) which is more lightweight.
2. Removed automatic logs when app starts, and how long it ran when the app exists. (An additional utility will be shipped in a later version.)
3. The `verboseIdentifer` and `quietIdentifier` config option has been removed.
4. `v3` no longer uses TypeScript classes, favors functional approach instead.
5. Multiple scopes (previously contexts) are now support by single instance of `itivrutaha` unlike previous.
6. File logging was completely removed.
7. The `:message` variable has been replaced by `:msg`.
8. Following variables are no longer supported `:node_path`, `:script_path`, `:node_version`, `:v8_version`, `:filename`, `:openssl_version`, `:electron_version`. These will be added again on request basis.

## ⚡️ Features

1. Easy to customize according to your needs
2. Flexible theming support with [chalk](https://www.npmjs.com/package/chalk)
3. Different log levels (ex. silent, verbose etc) *(Planned)*
4. Ability to log without any ANSI characters *(Planned)*
5. Support for uppercase message types (ex. INFO instead of info) *(Planned)*

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