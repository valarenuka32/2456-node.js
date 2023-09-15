const express = require("express");
const { productController } = require("../controllers");
const { productValidation } = require("../validation");
const validate = require("../middlewares/validate");

const router = express.Router();

// create product
router.post(
    "/create-product",
    validate(productValidation.createProduct),
    productController.createProduct
);

// product list
router.get(
    "/produt-list",
    productController.productList
);

// update product
router.put(
    "/update-product/:productId",
    productController.updareDetiles
);

// delete product
router.delete(
    "/delete-product/:productId",
    productController.deleteRecode
);

module.exports = router;
