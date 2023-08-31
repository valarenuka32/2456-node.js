const { userService } = require("../Service");


//  create user
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;
    console.log(reqBody);

    const user = await userService.createUser(reqBody);
    if (!user) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: 'user crte succesfully',
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get user list
const getUserList = async (req, res) => {
  try {
    const getDetails = await userService.getUserList(req, res);
    res.status(200).json({
      success: true,
      message: "User details get successfully!",
      data: getDetails,
    })
  } catch (error) {
    res.status(400);
  }
};


module.exports = {
  createUser,
  getUserList
};