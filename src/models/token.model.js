const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
    {
        token: {
            type: String,
        },
        expire_time: {
            type: Data,
            default: null,
        },
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const token = mongoose.model("token", tokenSchema);
module.exports = token;