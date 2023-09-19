const express = require("express");
const { userController } = require("../controllers");
const { userValidation } = require("../validations");
const validate = require("../middlewares/validate");

const router = express.Router();

// create route
router.post(
    "/create-user",
    validate(use)
)