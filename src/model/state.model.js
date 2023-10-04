const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema(
    {
        state_name: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const state = mongoose.model("state", stateSchema);
module.exports = state;