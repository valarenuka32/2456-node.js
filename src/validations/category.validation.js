const Joi = require("joi");

// category
const createCategory = {
    body: Joi.object().keys({
        category_name: Joi.string().trim().required(),
        category_description: Joi.string().trim().required(),
    })
};

module.exports = {
    createCategory
}