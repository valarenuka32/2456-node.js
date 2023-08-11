const express = require("express");
<<<<<<< HEAD
const { userValidation }=require("../validations")
const { userController } = require("../controllers");
const validate = require("../middlewares/validate");
=======
const { userController } = require("../controllers");
>>>>>>> c3eace834b8708bc309dde19fec9e7123b29b199

const router = express.Router();

// create user
router.post(
    "/create-user",
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
