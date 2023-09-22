const Joi = require("joi");

const createUser = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        phone_no: Joi.number().required(),
        password: Joi.number().required(),
    })
};

module.exports={
    createUser
}