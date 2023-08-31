const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        product_id: {
            type: String,
            trim: true,
        },
        product_name: {
            type: String,
            trim: true,
        },
        product_price: {
            type: Number,
            trim: true,
        },
        product_desc: {
            type: String,
            trim: true,
        },
        category_name: {
            type: mongoose.Types.ObjectId,
            ref: "categorys",
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
const product = mongoose.model("products", productSchema);

module.exports = product;