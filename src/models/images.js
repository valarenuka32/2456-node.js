const mongoose = require("mongoose");
const config = require("../config/config");

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
        toJSON: {
            transform: function (doc, data) {
                if (data?.image) {
                    data.image = `${config.base_url}image/${data.image}`;
                }
            },
        },
    }
);

const images = mongoose.model("images", imagesSchema);
module.exports = images;