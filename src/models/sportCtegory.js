const mongoose = require("mongoose");

const sportCtegorySchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            trim: true,
        },
        Description: {
            type: String,
            trim: true,
        },
        sport_date: {
            type: Date,
            default: Date.now(),
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

const sportCtegory = mongoose.model("sportCtegory", sportCtegorySchema);
module.exports = sportCtegory;