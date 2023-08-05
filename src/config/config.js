const joi=require("joi");
const dotenv = require("dotenv");

dotenv.config();

const envVarsSchema = joi.object({
    PORT:joi.number().default(3000),
    MONGODB_URL: joi.string().trim().description("mongoodb url"),

}).unknown();

const{ value:envVars,error}=envVarsSchema

module.exports = {
    port: envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
};