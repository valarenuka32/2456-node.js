const Joi = require("joi");

/** create mobile */
const mobileCreate = {
    body: Joi.object().keys({
        mobile_brand: Joi.string().required().trim(),
        mobile_model: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        stock: Joi.number().integer().required(),
    }),
};

module.exports = {
    mobileCreate
};