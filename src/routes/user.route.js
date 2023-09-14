const express = require("express");
const { userValidation } = require("../validation");
const { usercontroller } = require("../controllers");
const validate = require("../middlewares/validate");

const route = express.Router();

// create user
route.post(
    "/create-user",
    validate(userValidation.createUser),
    usercontroller.createUser
);


// get user list
route.get(
    "/list",
    validate(userValidation.userList),
    usercontroller.userlist
);

// update
route.put(
    "/update/:userId",
    validate(userValidation.updateDetiles),
    usercontroller.updateDetiles
);

// delete
route.delete(
    "/delete/:userId",
    validate(userValidation.deleteRecode),
    usercontroller.deleteRecode
);

module.exports = route;