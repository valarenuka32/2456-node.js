const Joi = require("joi");

// create category
const createUser = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        mobile_no: Joi.number().required(),
        email: Joi.string().required(),
    }),
};
const userList = {
    query: Joi.object({
      search: Joi.string().trim().allow(""),
      sortBy: Joi.string().trim().allow(""),
      limit: Joi.number().integer().allow("").default(10),
      page: Joi.number().integer().allow("").default(1),
    }),
  };

module.exports = {
    createUser,
    userList
};