const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
        },
        last_name: {
            type: String,
            trim: true,
        },
        mobile_no: {
            type: Number,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
    },
    {
        timeseries: true,
        versionKey: false,
    },
);

const user = mongoose.model("user", userSchema);
module.exports = user;