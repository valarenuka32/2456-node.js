const { bookService } = require("../Service");
/** create book */
const createBook = async (req, res) => {
  try {
    const reqBody = req.body;
    console.log(reqBody);

    const bookex = await bookService.getBookByName(reqBody.book_name);
    if (bookex) {
      throw new Error(`please add other book this ${bookex.book_name} book already created`)
    }
    const book = await bookService.createBook(reqBody);

    res.status(200).json({
      success: true,
      message: 'book creat succesfully',
      data: { book },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
// Get book list
const getbookList = async (req, res) => {
  try {
    const getDetails = await bookService.getbookList(req, res);

    res.status(200).json({
      success: true,
      message: "book details get successfully!",
      data: getDetails,
    })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });;
  }
};
// delete book
const deleteRecored = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const bookex = await bookService.getbookId(bookId);
    if (!bookex) {
      throw new Error("book detiles not found");
    }
    await bookService.deleteRecored(bookId);

    res.status(200).json({
      success: true,
      message: "book detiles delete successfully!"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// update
const updatebook = async (req, res) => {
  try {
    const bookId = req.params.bookId;

    const bookex = await bookService.getbookId(bookId);
    if (!bookex) {
      throw new Error("book not found");
    }

    await bookService.updatedetils(bookId, req.body);

    res.status(200).json({
      success: true,
      message: "book detiles update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createBook,
  getbookList,
  deleteRecored,
  updatebook
};