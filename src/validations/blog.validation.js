const Joi = require("joi");

// blog
const createrBlog = {
    body: Joi.object().key({
        blog_name: Joi.string().trim().required(),
        blog_description: Joi.string().trim().required(),
    })
};

module.exports = {
    createrBlog
}