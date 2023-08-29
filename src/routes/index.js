const express = require("express");
const userRoute = require("./user.route");
const bookRoute = require("./book.route");
const mobileRoute = require("./mobile.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/book", bookRoute);
router.use("/mobile", mobileRoute);

module.exports = router;