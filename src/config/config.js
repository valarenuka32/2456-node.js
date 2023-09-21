const joi = require("joi");
const dotenv = require("dotenv");

dotenv.config();

const envVarsSchema = joi.object({
    PORT: joi.number().default(7000),
    MONGODB_URL: joi.string().trim().description("mongoodb url"),
    BASE_URL: joi.string().trim().description("Base URL"),
    SMTP_HOST: joi.string().description("server that will send the email"),
    SMTP_PORT: joi.number().description("port to connect the emali"),
    SMTP_USERNAME: joi.string().description("username for email server "),
    SMTP_PASSWORD: joi.string().description("password for email server"),
    EMAIL_FROM: joi.string().description("the form field in the emails sent by the app")
}).unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

if (error) {
    console.log("Config Error: ", error);
}


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
    email: {
        smtp: {
            host: envVars.SMTP_HOST,
            port: envVars.SMTP_PORT,
            auth: {
                user: envVars.SMTP_USERNAME,
                pass: envVars.SMTP_PASSWORD,
            },
        },
        from: envVars.EMAIL_FROM,
    },
};