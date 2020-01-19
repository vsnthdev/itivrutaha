// This file contains message type objects

import chalk from 'chalk'

import { MessageTypeImpl } from './config'

export const successType: MessageTypeImpl = {
    text: 'success',
    color: chalk.hex('#CDDC39'),
    backgroundColor: chalk.bgHex('#7CB342')
}

export const noteType: MessageTypeImpl = {
    text: 'note',
    color: chalk.hex('#9C27B0'),
    backgroundColor: chalk.bgHex('#D500F9')
}

export const infoType: MessageTypeImpl = {
    text: 'info',
    color: chalk.hex('#00B0FF'),
    backgroundColor: chalk.bgHex('#2196F3')
}

export const okayType: MessageTypeImpl = {
    text: 'okay',
    color: chalk.hex('#607D8B'),
    backgroundColor: chalk.bgHex('#455A64')
}

export const verboseType: MessageTypeImpl = {
    text: 'verbose',
    color: chalk.hex('#009688'),
    backgroundColor: chalk.bgHex('#00796B')
}

export const warningType: MessageTypeImpl = {
    text: 'warning',
    color: chalk.hex('#FFC107'),
    backgroundColor: chalk.bgHex('#FFC107')
}

export const errorType: MessageTypeImpl = {
    text: 'error',
    color: chalk.hex('#F44336'),
    backgroundColor: chalk.bgHex('#FF1744')
}