const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        category_name: {
            type: String,
            trim: true,
        },
        category_description: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const category = mongoose.model("category", categorySchema);
module.exports = category;