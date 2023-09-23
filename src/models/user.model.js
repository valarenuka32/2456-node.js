const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
        },
        last_name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        phone_no: {
            type: Number,
        },
        password: {
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
userSchema.pre("save", async function (next) {
    const user = this;

    if (user.isModified("password")) {
        user.Password = bcrypt.hash(user.Password, 8);
    }
    next();
});

const user = mongoose.model("user", userSchema);
module.exports = user;