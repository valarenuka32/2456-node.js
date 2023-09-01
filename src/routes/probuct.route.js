const express = require("express");
const { productValidaton } = require("../validations");
const { productControler } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create product
router.post(
    "/create-product",
    validate(productValidaton.productCreate),
    productControler.productCreate
);

// get produt list
router.get(
    "/get-list",
    validate(productControler.getlist),
    // productControler.getlist
);

// delete
router.delete(
    "/delete",
    // validate(productValidaton.deleteRecord),
    // productControler.deleteRecord
);

// update
router.put(
    "update-list",
    // validate(productControler.updateList),
    // productControler.updateList
);

module.exports = router;