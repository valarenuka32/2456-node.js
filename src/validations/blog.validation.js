const Joi = require("joi");

// blog
const createBlog = {
    body: Joi.object().keys({
        blog_name: Joi.string().trim().required(),
        blog_description: Joi.string().trim().required(),
    })
};

module.exports = {
    createBlog
}