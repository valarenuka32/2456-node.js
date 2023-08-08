const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
        },
        product_price: {
            type: Number,
            trim: true,
        },
        product_desc: {
            type: Number,
            trim: true,
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
const product = mongoose.Model("products", productSchema);

module.exports = product;