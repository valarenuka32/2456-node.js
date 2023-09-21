const Joi = require("joi");

/** create createSport_category */

const createSport_category = {
    body: Joi.object().keys({
        Name: Joi.string().required().trim(),
        Description: Joi.string().required().trim(),
        sport_date: Joi.date(),
    }),
};

module.exports = {
    createSport_category
};