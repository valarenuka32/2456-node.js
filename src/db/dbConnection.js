const mongooes = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
    mongooes
        .connect(config.mongodb.url, config.monogodb.options)
        .then((data) => {
            console.log("Database connection successfully!");
        })
        .catch((error) => {
            console.log("Database connection successfully!");
        });
};

module.exports = { connectDB };