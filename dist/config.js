import Joi from 'joi';
export var typeCase;
(function (typeCase) {
    typeCase[typeCase["upper"] = 0] = "upper";
    typeCase[typeCase["lower"] = 1] = "lower";
    typeCase[typeCase["title"] = 2] = "title";
})(typeCase || (typeCase = {}));
export const configSchema = Joi.object({
    appName: Joi.string(),
    bootLog: Joi.bool().required(),
    verboseIdentifier: Joi.array().items(Joi.string()),
    theme: Joi.object({
        string: Joi.string().required(),
        colored: Joi.bool(),
        boldType: Joi.bool(),
        typeCase: Joi.number(),
        timeFormat: Joi.string(),
    }),
    logs: Joi.object({
        dir: Joi.string(),
        output: Joi.string().required(),
        error: Joi.string().required(),
        enable: Joi.bool().required(),
    }),
});
