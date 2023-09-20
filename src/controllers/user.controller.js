const { userService } = require("../services");

// create user
const userCreate = async (req, res) => {
    try {
        const reqBody = req.body;

        const user = await userService.userCreate(reqBody);
        if (!user) {
            throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "user  create successfully!",
            data: { user }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// get list
// const 

module.exports = {
    userCreate
}