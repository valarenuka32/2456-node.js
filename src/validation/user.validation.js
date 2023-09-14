const Joi = require("joi");

// create category
const createUser = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        mobile_no: Joi.number().required(),
        email: Joi.string().required(),
    }),
};

module.exports = { createUser };