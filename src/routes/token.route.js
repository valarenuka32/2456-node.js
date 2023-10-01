const express = require("express");
const { tokenValidation } = require("../validations");
const { tokenController } = require("../controllers");
const auth = require("../middlewares/auth");
const validate = require("../middlewares/validate");

const router=express.Router();

// Create jsonwebtoken
router.post(
    "/create-token",
    validate(tokenValidation.generateToken),
    tokenController.generateToken
);

// verify token
router.get(
    "/verify-token",
    auth(),
    tokenController.verifyToken
);

module.exports = router;