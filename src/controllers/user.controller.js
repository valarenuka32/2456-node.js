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
        const userId = req.params.userId;

        const userEx = await userService.getUserById(userId);
        if (!userEx) {
            throw new Error("user not found");
        }
        await userService.updateUser(userId, req.body)

        res.status(200).json({
            success: true,
            message: "user detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// delete
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userEx = await userService.getUserById(userId);
        if (!userId) {
            throw new Error("user detiles not found!");
        };
        await userService.deleteUser(userId);

        res.status(200).json({
            success: true,
            message: error.message,
        });
    } catch (error) {
        res.status({ success: false, message: error.message });
    }
}

module.exports = {
    userCreate,
    userList,
    updateUser,
    deleteUser
};