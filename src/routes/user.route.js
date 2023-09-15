const express = require("express");
const { userValidation } = require("../validation");
const { userController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create user
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);


// get user list
router.get(
    "/list",
    userController.userList
);

// update
router.put(
    "/update/:userId",
    userController.updateDetiles
);

// delete
router.delete(
    "/delete/:userId",
    userController.deleteRecode
);

module.exports = router;