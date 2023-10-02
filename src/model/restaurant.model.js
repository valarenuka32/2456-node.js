const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
    {
        restaurant_name: {
            type: String,
            trim: true,
        },
        restaurant_address: {
            type: String,
            trim: true,
        },
        restaurant_contect_no: {
            type: Number,
        },
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const restaurant = mongoose.model("restaurant", restaurantSchema);
module.exports = restaurant;