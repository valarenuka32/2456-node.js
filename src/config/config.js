const joi = require("joi");
const dotenv = require("dotenv");
const Joi = require("joi");

dotenv.config();

const envVarsSchema = joi.object({
    PORT: joi.number().default(5000),
    MONGODB_URL: Joi.string().trim().description("mongoodb url"),
    BASE_URL: joi.string().trim().description("BASE_URL"),
}).unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

module.exports = {
    port: envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    base_url: envVars.BASE_URL,
};