const Joi=require("joi");
const dotenv=require("dotenv");

dotenv.config();

const envVareSchema=Joi.object({
    PORT:Joi
}).unknown();