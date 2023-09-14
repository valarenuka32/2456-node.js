const express = require("express");
const auth = require("../middlewares/auth");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create user
router.post(
    "/create-user",
    // auth(),
    validate(userValidation.createUser),
    userController.createUser
);

//  Get user list
router.get(
    "/list",
    validate(userValidation.getUserList),
    userController.getUserList
);

module.exports = router;
