const express = require("express");
const { userController } = require("../controllers");
const { userValidation } = require("../validations");
const validate = require("../middlewares/validate");

const router = express.Router();

// create route
router.post(
    "/create-user",
    validate(userValidation.userCreate),
    userController.userCreate
);

// user list
router.get(
    "/list",
    userController.userList
);

// update
router.put(
    "/update-user",
    userController.updateUser
);

// delete
router.delete(
    "/delete-user",
    userController.deleteUser
);

module.exports = router;