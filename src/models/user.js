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
        e_mail: {
            type: String,
            trim: true,
        },
        phone_no: {
            type: Number,
            trim: true,
        },
        password: {
            type: Number,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const user = mongoose.model("user", userSchema);
module.exports = user;