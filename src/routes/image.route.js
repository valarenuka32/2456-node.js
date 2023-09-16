const express = require("express");
const { imageController } = require("../controllers");
const { imageValidation } = require("../validation");
const validate = require("../middlewares/validate");
const { upload } = require("../middlewares/uplode");

const router = express.Router();

// create
router.post(
    "/crate-image",
    upload.single("images"),
    validate(imageValidation.createImage),
    imageController.createImage
);

// list
router.get(
    "/list",
    imageController.imageList
);

// delete
router.delete(
    "/delete-img/:imageId",
    imageController.deleteImg
);

// update
router.put(
    "/update-img",
    imageController.updateImg
);

module.exports = router;
