const Joi = require("joi");

// create product

const createProduct = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_desc: Joi.string().required().trim(),
        price: Joi.number().required(),
        quality: Joi.number().required(),
        images:Joi.string(),
    })
};

module.exports = {
    createProduct
}
