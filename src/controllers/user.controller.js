const { userService, emailervices } = require("../Service");


//  create user
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;

        res.status(200).json({
            success: true,
            message: reqBody,
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createUser
};