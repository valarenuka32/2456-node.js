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
        Image: {
            type: String,
            trim: true,
        },
        Name: {
            type: String,
            trim: true,
        },
        Name: {
            type: String,
            trim: true,
        },

    }
)