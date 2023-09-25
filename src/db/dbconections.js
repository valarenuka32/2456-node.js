const mongoose = require("mongoose");
const config = require("./config/config");

const connectDB = async () => {
    mongoose
        .connect(config.mongoose.url, config.mongoose.options)
        .then((data) => {
            console.log("Database connection successfully!");
        })
        .catch((data) => {
            console.log("Database connetion error:", error);
        })
};

module.exports = { connectDB };