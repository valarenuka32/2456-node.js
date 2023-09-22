const express = require("express");

const userRoute = require("./user.route");
const contect_usRoute = require("./contect_us.route");
const sport_categoryRoute = require("./sport_category.route");
const sportgalleryRoute = require("./sport_category.route");
const founderRoute = require("./founder.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/contect_us", contect_usRoute);
router.use("/sport_category", sport_categoryRoute);
router.use("/sportgallery", sportgalleryRoute);
router.use("/founder", founderRoute);

module.exports = router;