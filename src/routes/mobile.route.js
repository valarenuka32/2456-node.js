const express = require("express");
const { mobileValidaton } = require("../validations");
const { mobileControler } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-mobile",
    validate(mobileValidaton.mobileCreate),
    mobileControler.mobileCreate
);

// get
router.get(
    "/mobile-list",
    // validate(mobileValidaton.getMobileList),
    mobileControler.getMobileList
);

// delete
router.delete(
    "/mobile-delete/:mobileId",
    // validate(mobileValidaton.deleteRecord),
    mobileControler.deleteRecord
);

// update
router.put(
    "/update-mobile/:mobileId",
    validate(mobileValidaton.updatemobile),
    mobileControler.updatemobile
);

module.exports = router;