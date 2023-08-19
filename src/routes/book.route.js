const express = require("express");
const { bookValidaton } = require("../validations");
const { bookControler } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create category
router.post(
      "/create-book",
      validate(bookValidaton.createBook),
      bookControler.createBook
);

// get category list
router.get(
      "/list",
      validate(bookValidaton.getbookList),
      bookControler.getbookList
);

module.exports = router;