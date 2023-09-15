const { userService } = require("../services");

// create user
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const user = await userService.createUser(reqBody);
        if (!user) {
            throw new Error("somthing went wrong , please try again on later!")
        }

        res.status(200).json({
            success: true,
            message: 'user create successfully',
            data: (user),
        })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get user list
const userList = async (req, res) => {
    try {
        const getList = await userService.userList();

        res.success(200).json({
            success: true,
            message: "user list get successfully",
            data: (getList)
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update detiles
const updateDetiles = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEx = await userService.getuserById(userId);
        if (!userEx) {
            throw new Error("user not found");
        }

        await userService.updateDetiles(userId, req.body);
        res.status(200).json({
            success: true,
            message: "user detiles update successfully!"
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete user recode
const deleteRecode = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEx = await userService.getuserById(userId);
        if (!userEx) {
            throw new Error("user not found");
        }
        await userService.deleteRecode(userId.req.body);
        res.success(200).json({
            success: true,
            message: "user detiles delete successfully !"
        })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createUser,
    userList,
    updateDetiles,
    deleteRecode
};