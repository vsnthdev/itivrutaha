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

## 🛠 Customization

```javascript
import chalk from 'chalk'
import itivrutaha from 'itivrutaha'

// create a new instance of the logger
const logger = await itivrutaha.createNewLogger({
    // The name of your app, if not provided
    // the value will be determined by reading
    // package.json of the above project.
    appName: null,

    // Whether to log when the logger is initialized.
    bootLog: true,

    // Whether to log when the Node.js process exits.
    // Logs when terminating gracefully, due to an error
    // or when POSIX signals are received.
    shutdownLog: true,

    // Command-line arguments that suppress the output
    // to the console if found.
    quietIdentifier: ['--quiet', '-q'],

    // Command-line arguments that render verbose message
    // type to the console if found.
    verboseIdentifier: ['--verbose', '-v'],

    // Configuration for this particular logger.
    // Useful when application has multiple loggers.
    context: {
        // Name of the context, example "app", "api",
        // "bot", "server"...
        name: null,

        // Chalk color function for this context.
        color: chalk.blueBright,
    },

    // Configuration options related to rendering the
    // log messages to the console.
    theme: {
        // The theme string, that determines which variables
        // are to be rendered.
        string: `:time ${chalk.gray.dim('•')} :emoji :type :message`,

        // Whether to log colored output
        // or plain.
        colored: true,

        // Whether to render message type (":type" variable)
        // in bold.
        boldType: true,

        // The character casing to render message type or
        // the (":type" variable).
        typeCase: typeCase.lower,

        // Luxon time formatting used to render the
        // ":time" variable. See 👇 for formatting guide
        // https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
        timeFormat: 'HH:mm:ss dd-LL-yyyy',
    },

    logs: {
        // Whether to enable file logging or not.
        enable: false,

        // The directory where log files are saved.
        dir: '/var/log/[appname]',

        // Filename for writing output (stdout)
        // logs.
        output: `output-${DateTime.local().toFormat('dd-LL-yyyy')}.log`,

        // Filename for writing error (stderr)
        // logs.
        error: `error-${DateTime.local().toFormat('dd-LL-yyyy')}.log`,
    },
})
```

## ⚡️ Variables

| Variable | Description |
|-|-|
| `:time` | The time of the log message. A [Luxon](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens) format string can be given as `theme.timeFormat` to change the formatting. |
| `:emoji` | Emoji according to the message type. |
| `:message` | Log message in terminal's default color. |
| `:node_path` | Full path to Node.js executable. |
| `:type` | Message type (ie. info, warning, error, etc). |
| `:script_path` | Full path of the Node.js entry JavaScript file. |
| `:node_version` | Version of Node.js running. |
| `:v8_version` | Version of V8 engine running along with Node.js. |
| `:filename` | Filename of the Node.js entryfile. |
| `:openssl_version` | Version of OpenSSL running along with Node.js. |
| `:electron_version` | Version of Electron.js running. Returns `undefined` if not Electron. |


## 📰 License
> The **itivrutaha** project is released under the [MIT license](https://github.com/vasanthdeveloper/itivrutaha/blob/main/LICENSE.md). <br> Developed &amp; maintained By Vasanth Srivatsa. Copyright 2021 © Vasanth Developer.
<hr>

> <a href="https://vasanth.tech" target="_blank" rel="noopener">vasanth.tech</a> &nbsp;&middot;&nbsp;
> YouTube <a href="https://vas.cx/videos" target="_blank" rel="noopener">@vasanthdeveloper</a> &nbsp;&middot;&nbsp;
> Twitter <a href="https://vas.cx/twitter" target="_blank" rel="noopener">@vasanthdevelop</a> &nbsp;&middot;&nbsp;
> Discord <a href="https://vas.cx/discord" target="_blank" rel="noopener">Vasanth Developer</a>