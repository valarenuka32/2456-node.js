const mongoose = require("mongoose");

const restaurantimgRoute = new mongoose.Schem(
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
const restaurantimage = mongoose.model("restaurantimage", restaurantimgRoute);
module.exports = restaurantimage;