const { bookService } = require("../Service");
/** create book */
const createBook = async (req, res) => {
  try {
    const reqBody = req.body;
    console.log(reqBody);
    // const userExists = await userService.getUserByEmail(reqBody.email);
    // if (userExists) {
    //   throw new Error("User already created by this email!");
    // }

    const book = await bookService.createBook(reqBody);
    if (!book) {
      throw new Error("Something went wrong, please try again or later!");
    }

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

    await bookService.updatedetils(bookId, res.body);

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