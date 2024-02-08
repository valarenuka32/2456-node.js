const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        blog_name: {
            type: String,
            trim: true,
        },
        blog_description: {
            type: String,
            trim: true,
        },
        images: {
            type: mongoose.Types.ObjectId,
            ref: "images",
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category",
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

const blog = mongoose.model("blog", blogSchema);
module.exports = blog;