const mongoose = require("mongoose");

const openinghoursSchema = new mongoose.model(
    {
        open_time: {
            type: String,
            trim: true,
        },
        close_time: {
            type: String,
            trim: true,
        },
        day_of_week: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const openinghours = mongoose.model("openinghours", openinghoursSchema);
module.exports = openinghours;