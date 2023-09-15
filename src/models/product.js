const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
        },
        product_desc: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            default: 0,
        },
        quality:{
            type:Number,
            default:0,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const product = mongoose.model("product", productSchema);
module.exports = product;