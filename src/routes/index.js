const express = require("express");
const userRouter = require("./user.route");
const restaurantRouter = require("./restaurant.route");

const router = express.Router();

router.use("/user", userRouter);
router.use("/restaurant", restaurantRouter);

module.exports = router;