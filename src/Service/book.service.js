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
  return User.find();
}
module.exports = {
    createBook,
    getbookList
};