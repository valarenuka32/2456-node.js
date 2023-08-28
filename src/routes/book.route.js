const express = require("express");
const { bookValidaton } = require("../validations");
const { bookControler } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create book
router.post(
      "/create-book",
      validate(bookValidaton.createBook),
      bookControler.createBook
);

// get book list
router.get(
      "/list",
      // validate(bookValidaton.getbookList),
      bookControler.getbookList
);

//delete book detiles
router.delete(
      "/delete-book/:bookId",
      // validate(bookValidaton.deleteRecored),
      bookControler.deleteRecored
);

// update
router.put(
      "/update-book/:bookId",
      bookControler.updatebook
);

module.exports = router;