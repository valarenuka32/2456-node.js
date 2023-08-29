const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema(
    {
        mobile_brand: {
            type: String,
            trim: true,
        },
        mobile_model: {
            type: String,
            trim: true
        },
        price: {
            type: Number,
            default: 0,
        },
        stock: {
            type: Number,
            default: 0,
        },
        is_active: {
            type: Boolean,
            default: 0,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
const mobile = mongoose.model("mobile", mobileSchema);
module.exports = mobile;