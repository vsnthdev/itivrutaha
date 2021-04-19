/*
 *  Reads source code and builds documentation.
 *  Created On 19 April 2021
 */

import chalk from 'chalk'
import dirname from 'es-dirname'
import fs from 'fs/promises'
import mkdirp from 'mkdirp'
import path from 'path'

const dest = path.join(dirname(), '..', 'docs', 'Customization.md')

const getHeaderFooter = async () => {
    const readme = await fs.readFile(path.join(dirname(), '..', 'README.md'), {
        encoding: 'utf-8',
    })

    const header = readme.split('<!-- header -->')[0].trim()
    const footer = readme.split('<!-- footer -->')[1].trim()

    return { header, footer }
}

const getCustomization = async () => {
    const indexFile = await fs.readFile(
        path.join(dirname(), '..', 'src', 'itivrutaha.ts'),
        {
            encoding: 'utf-8',
        },
    )

    return indexFile
        .split('const defaults: ConfigImpl = {')[1]
        .split('\n}')[0]
        .slice(1)
}

const getVariables = async () => {
    const renderer = await fs.readFile(
        path.join(dirname(), '..', 'src', 'class', 'renderer.ts'),
        { encoding: 'utf-8' },
    )

    let returnable = ''

    const lines = renderer
        .split('// <!-- docs -->')[1]
        .split('\n')
        .map(line => line.trim())
        .filter(line => line != '')
        .join('\n')
        .split('\n//')

    for (const line of lines) {
        const comment = line.split('\n')[0].replace('// ', '').trim()
        const code = line.split('\n')[1].slice(10).split("'")[0]

        returnable = `${returnable}| \`${code}\` | ${comment} |\n`
    }

    return returnable
}

const readme = await getHeaderFooter()
const customization = await getCustomization()
const variables = await getVariables()

const contents = readme.header
    .concat('\n\n## 🛠 Customization')
    .concat('\n\n```javascript')
    .concat(
        `
        import chalk from 'chalk'
        import itivrutaha from 'itivrutaha'
    `
            .split('\n')
            .map(line => line.trim())
            .join('\n'),
    )
    .concat('\n// create a new instance of the logger')
    .concat('\nconst logger = await itivrutaha.createNewLogger({\n')
    .concat(customization)
    .concat('\n})\n```')
    .concat('\n\n## ⚡️ Variables')
    .concat('\n\n| Variable | Description |')
    .concat('\n|-|-|\n')
    .concat(variables)
    .concat('\n\n')
    .concat(readme.footer)

await mkdirp(path.dirname(dest))
await fs.writeFile(dest, contents)
console.log(`✅ ${chalk.greenBright.bold('Built')} ${dest}`)
