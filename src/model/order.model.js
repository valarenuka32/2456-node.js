const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        order_data: {
            type: Date,
            trim: true,
        },
        totalamount: {
            type: Number,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const order = mongoose.model("order", orderSchema);
module.exports = order;
