const mongoose = require("mongoose");
const config = require("../config/config");

const imagesSchema = new mongoose.Schema(
    {
        images_name: {
            type: String,
            trim: true,
        },
        images_description: {
            type: String,
            trim: true,
        },
        blog_images: {
            type: String,
        },
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.blog_images) {
                    data.blog_images = `${config.base_url}blog_images/${data.blog_images}`;
                }
            },
        },
    }
);

const images = mongoose.model("images", imagesSchema);
module.exports = images;