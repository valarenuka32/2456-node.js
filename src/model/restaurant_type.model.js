const mongoose = require("mongoose");

const restauranttypeSchema = new mongoose.Schema(
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
const restauranttype = mongoose.model("restauranttype", restauranttypeSchema);
module.exports = restauranttype;