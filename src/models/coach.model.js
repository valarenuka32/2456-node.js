const mongoose = require("mongoose");

const coachSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        age: {
            type: Number,
        },
        gender: {
            type: String,
            trim: true,
        },
        contect_no: {
            type: Number,
            default: 0,
        },
        specializations: {
            type: String,
            trim: true,
        },
        coaching_experience: {
            type: Number,
        },
        team: {
            type: mongoose.Types.ObjectId,
            ref: "team",
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

const coach = mongoose.model("coach", coachSchema);
module.exports = coach;