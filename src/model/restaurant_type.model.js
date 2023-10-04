const mongoose = require("mongoose");

const restauranttypeRoute = new mongoose.Schema(
    {
        restaurant_type: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true,
        versionKay: false,
    }
);
const restauranttype = mongoose.model("restauranttype", restauranttypeRoute);
module.exports = restauranttype;