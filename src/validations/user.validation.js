const Joi = require("joi");

// user
const createuser = {
    body: Joi.object().keys({
        first_name: Joi.string().trim().required(),
        last_name: Joi.string().trim().required(),
        email: Joi.string().trim().required(),
        phone_no: Joi.number().required(),
    })
};

module.exports = {
    createuser
}