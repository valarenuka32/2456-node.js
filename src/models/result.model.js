const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
    {
        Winner_team: {
            type: String,
            trim: true,
        },
        Loser_team: {
            type: String,
            trim: true,
        },
        team_score: {
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