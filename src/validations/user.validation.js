const Joi = require("joi");

const createUser = {
    body: Joi.object().keys({
        first_name: Joi.string().trim().required(),
        last_name: Joi.string().trim().required(),
        password: Joi.number().require(),
        phone_no: Joi.number().require(),
    })
};
module.exports = {
    createUser
}