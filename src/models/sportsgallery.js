const mongoose = require("mongoose");

const sportsgallerySchema = new mongoose.Schema(
    {
        sport_name: {
            type: String,
            trim: true,
        },
        Description: {
            type: String,
            trim: true,
        },
        sport_img: {
            type: String,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const sportsgallery = mongoose.model("sportsgallery", sportsgallerySchema);
module.exports = sportsgallery;