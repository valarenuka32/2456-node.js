const express = require("express");
const userRouter = require("./user.route");
const restaurantRouter = require("./restaurant.route");
const restauranttypeRouter = require("./restaurent_type.route");

const router = express.Router();

router.use("/user", userRouter);
router.use("/restaurant", restaurantRouter);
router.use("/restauranttypeRouter", restauranttypeRouter);

module.exports = router;