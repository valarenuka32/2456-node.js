const mongoose = require("mongoose");
const sportsgallerySchema = new mongoose.Schema(
    {

    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const sportsgallery = mongoose.model("sportsgallery", sportsgallerySchema);
module.exports = sportsgallery;