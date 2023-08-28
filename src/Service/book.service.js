const { book } = require("../models");

/**
 * Create book
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBook = async (reqBody) => {
  return book.create(reqBody);
};

const getbookList = async (req, res) => {
  return book.find();
};

const deleteRecored=async(bookId)=>{
  return book.findByIdAndDelete(bookId);
};

const getbookId=async(bookId)=>{
   return book.findById(bookId);
};
module.exports = {
    createBook,
    getbookList,
    deleteRecored,
    getbookId
};