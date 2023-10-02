const express = require("express");
const { restaurantValidation } = require("../validations");
const { restaurantController } = require("../controllers");
const validate = require("../middlewares/validate");
const { route } = require("./user.route");

const router = express.Router();

router.post(
    "/craete-restaurant",
    validate(restaurantValidation.createRestaurant),
    restaurantController.createRestaurant
);
module.exports = router;
