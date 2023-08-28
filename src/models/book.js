const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        book_name: {
            type: String,
            trim: true,
        },
        book_desc: {
            type: String,
            trim: true,
        },
        book_price: {
            type: Number,
            default:0,
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
const book = mongoose.model("books", bookSchema);
module.exports = book;
