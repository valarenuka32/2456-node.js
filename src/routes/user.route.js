const express = require("express");
<<<<<<< HEAD
const { userValidation }=require("../validations");
const { userController } = require("../controllers");
const validate = require("../middlewares/validate");

=======
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const validate = require("../middlewares");
>>>>>>> 702a402564ed0fc43c64b2c46057ec3f7c7670e0


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
