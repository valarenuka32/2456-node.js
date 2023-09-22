const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
    {
        Winner: {
            type: String,
            trim: true,
        },
        Loser: {
            type: String,
            trim: true,
        },
        Score: {
            type: Number,
        },
        password: {
            type: Number,
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

const result = mongoose.model("result", resultSchema);
module.exports = result;