const express = require("express");
const { uservalidation } = require("../validations");
const { userController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-user",
    validate(uservalidation.createUser),
    userController.createUser
);
// list
router.get(
    "/list",
    userController.userList
);
// update
router.put(
    "/update-user",
    userController.updateRecode
);
// update
router.delete(
    "/delete-user",
    userController.deleteRecode
);

module.exports = router;