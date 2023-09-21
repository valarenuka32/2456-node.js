const Joi = require("joi");

/** create createsportgallery */

const createsportGallery = {
    body: Joi.object().keys({
        sport_img: Joi.string().required().trim(),
    }),
};

module.exports = {
    createsportGallery
};