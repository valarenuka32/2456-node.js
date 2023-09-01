const Joi = require("joi");

/** create product */
const productCreate = {
  body: Joi.object().keys({
      product_name: Joi.string().required().trim(),
      product_desc: Joi.string().required().trim(),
      product_price: Joi.number().integer().required(),
  }),
};



module.exports = {
    productCreate
};