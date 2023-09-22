const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
    {
        team_name: {
            type: String,
            trim: true,
        },
        established_year: {
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

const team = mongoose.model("team", teamSchema);

module.exports = team;