const joi = require("joi");
const dotenv = require("dotenv");

dotenv.config();

const envVarsSchema = joi.object({
    PORT: joi.number().default(3000),
    MONGODB_URL: joi.string().trim().description("mongoodb url"),

}).unknown();

const { value: envVars, error } = envVarsSchema
<<<<<<< HEAD
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

if (error) {
    console.log("Config Error: ", error);
}
=======
>>>>>>> c3eace834b8708bc309dde19fec9e7123b29b199

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