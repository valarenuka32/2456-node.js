const { book } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBook = async (reqBody) => {
  return book.create(reqBody);
};

const getbookList = async (req, res) => {
  return book.find();
}
module.exports = {
    createBook,
    getbookList
};