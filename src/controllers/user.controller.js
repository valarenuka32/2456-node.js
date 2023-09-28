const { userService } = require("../services");

// create
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const user = await userService.createUser();
        res.status(200).json({
            success: true,
            message: "user create successfully",
            data: { user },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get user list
const userList = async (req, res) => {
    try {
        const getList = await userService.userList();
        res.status(200).json({
            success: true,
            message: "Get user list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
// update
const updateRecode=async(req,res)=>{
    try {
        const userId=req.params.userId;
        const userEx=await userService.
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}
module.exports = {
    createUser,
    userList
}