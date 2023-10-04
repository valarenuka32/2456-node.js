const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
    {
        country_name: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const country = mongoose.model("country", countrySchema);
module.exports = country;