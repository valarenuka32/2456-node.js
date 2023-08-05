const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    port: envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        Option: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
};