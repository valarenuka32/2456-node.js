const express = require("express");
const { userController } = require("../controllers");
const { userValidation } = require("../validations");
const validate = require("../middlewares/validate");

const router = express.Router();

// create route
router.post(
    "/create-user",
    validate(userController.userCreate),
    userValidation.userCreate
);

// user list
router.get(
    "/list",
    userValidation.userList
);

// update
router.put(
    "/update-user",
    userValidation.updateUser
);

// delete
router.delete(
    "/delete-user",
    userValidation.deleteUser
);

module.exports = router;