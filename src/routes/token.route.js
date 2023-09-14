const express = require("express");
const { tokenValidaton } = require("../validations");
const { tokenControler } = require("../controllers");
const validate = require("../middlewares/validate");

const route = express.Router();

// create
route.post(
    "/create-token",
    validate(tokenValidaton.createToken),
    tokenControler.createToken
);