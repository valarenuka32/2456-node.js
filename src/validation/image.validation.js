const Joi = require("joi");

const createImage = {
    body: Joi.object().keys({
        img_name: Joi.string().required().trim(),
        img_desc: Joi.string().required().trim(),
        img: Joi.string().allow(""),
    })
};

module.exports = {
    createImage
}