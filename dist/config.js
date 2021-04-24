/*
 *  This file will contain code related to loading and storing configuration.
 *  Created On 11 October 2019
 */
import Joi from 'joi';
// typeCase enumerator will hold the
// int values for type string case
export var typeCase;
(function (typeCase) {
    typeCase[typeCase["upper"] = 0] = "upper";
    typeCase[typeCase["lower"] = 1] = "lower";
    typeCase[typeCase["title"] = 2] = "title";
})(typeCase || (typeCase = {}));
export const configSchema = Joi.object({
    appName: Joi.string(),
    bootLog: Joi.bool().required(),
    shutdownLog: Joi.bool().required(),
    clearOnSIGINT: Joi.bool().required(),
    quietIdentifier: Joi.array().items(Joi.string()),
    verboseIdentifier: Joi.array().items(Joi.string()),
    context: Joi.object({
        color: Joi.any().required(),
        name: Joi.string().allow(null).required(),
    }),
    theme: Joi.object({
        string: Joi.string().required(),
        colored: Joi.bool(),
        boldType: Joi.bool(),
        typeCase: Joi.number(),
        timeFormat: Joi.string(),
    }),
    logs: Joi.object({
        dir: Joi.string().allow(null).required(),
        output: Joi.string().required(),
        error: Joi.string().required(),
        enable: Joi.bool().required(),
    }),
});
