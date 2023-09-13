const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
    {
        token: {
            type: String,
            trim: true,
        },
        expire_date: {
            type: Date,
            default: null,
        },
        is_active: {
            type: Boolean,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const token = mongoose.model("token", tokenSchema);

module.exports = token;