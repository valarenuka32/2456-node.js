const { get } = require("mongoose");
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
const userList = async (req, res) => {
    try {
        const getDetiles = await userService.userList();
        res.status(200).json({
            success: true,
            message: "user  create successfully!",
            data: { getDetiles }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// update
const updateUser = async (req, res) => {
   try {
    const userId=req.params.userId;

    const userEx=await userService
   } catch (error) {
    res.status(400).json({success:false,message:error.message});
   };
};

module.exports = {
    userCreate,
    userList,
    updateUser
}