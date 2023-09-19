const mongoose = require("mongoose");

const contectusSchema = new mongoose.Schema(
    {
        full_name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            type: true,
        },
        address: {
            type: String,
            type: true,
        },
        phone: {
            type: Number,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const contect_us = mongoose.model("contect_us", contectusSchema);
module.exports = contect_us;