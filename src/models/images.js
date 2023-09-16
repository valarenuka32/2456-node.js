const mongoose = require("mongoose");

const imagesSchema = new mongoose.Schema(
    {
        img_name: {
            type: String,
            trim: true,
        },
        img_desc: {
            type: String,
            trim: true
        },
        img: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const images = mongoose.model("images", imagesSchema);
module.exports = images;