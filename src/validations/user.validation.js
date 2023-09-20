const Joi = require("joi");

const userCreate = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        e_mail: Joi.string().required().trim(),
        phone_no: Joi.number().required().trim(),
        password: Joi.number().required().trim(),
    })
};

module.exports={
    userCreate
}