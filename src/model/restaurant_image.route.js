const mongoose = require("mongoose");

const restaurantimgSchema = new mongoose.Schem(
    {
        restaurant_image: {
            type: String,
            trim: true
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const restaurantimage = mongoose.model("restaurantimage", restaurantimgSchema);
module.exports = restaurantimage;