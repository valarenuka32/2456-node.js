const express = require("express");
const { uplode } = require("../middlewares/upload");
const { imageValidation } = require("../validations");
const { imageController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-img",
    uplode.single("blog_images"),
    validate(imageValidation.createImage),
    imageController.createImage
);
// list
router.get(
    "/list",
    imageController.imageList
);
// update
router.put(
    "/update:imagesId",
    imageController.updateRecode
);

// delete
router.delete(
    "/delete:imagesId",
    imageController.deleteRecode
);

module.exports = router;
