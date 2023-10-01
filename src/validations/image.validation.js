const Joi = require("joi");

// images
const createImage = {
    body: Joi.object().keys({
        images_name: Joi.string().trim().required(),
        images_description: Joi.string().trim().required(),
        blog_images: Joi.string().required(),
    })
};

module.exports = {
    createImage
}