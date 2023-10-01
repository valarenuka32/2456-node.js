const Joi = require("joi");

// blog
const createrBlog = {
    body: Joi.object().key({
        blog_name: Joi.string().trim().require(),
        blog_description: Joi.string().trim().require(),
    })
};

module.exports = {
    createrBlog
}