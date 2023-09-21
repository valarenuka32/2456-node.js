const express = require("express");
const { sport_categoryValidation } = require("../validations");
const { sport_categoryCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create sportgallery
router.post(
    "/create-sport_category",
    validate(sport_categoryValidation.createSport_category),
    sport_categoryCantroller.createSport_category
);

// // get sport_category
router.get(
    "/list",
    sport_categoryCantroller.sport_categoryList
);

 // dalete
router.delete(
    "/delete-sport_category/:sport_categoryId",
    sport_categoryCantroller.deleteRecord
);

// update
router.put(
    "/update/:sport_categoryId",
    sport_categoryCantroller.updateDetiles
);

module.exports = router;