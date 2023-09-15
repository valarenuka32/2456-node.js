const express = require("express");
const { userValidation } = require("../validation");
const { usercontroller } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create user
router.post(
    "/create-user",
    validate(userValidation.createUser),
    usercontroller.createUser
);


// get user list
router.get(
    "/list",
    usercontroller.userList
);

// update
router.put(
    "/update/:userId",
    usercontroller.updateDetiles
);

// delete
router.delete(
    "/delete/:userId",
    usercontroller.deleteRecode
);

module.exports = router;