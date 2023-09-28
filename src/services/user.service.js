const {user} = require("../models");

const createUser = async (reqBody) => {
    return user.create(reqBody)
};
const userList = async (req, res) => {
    return user.find()
};

const getUserById=async(req,res)=>{
    return user.findById()
}

module.exports = {
    createUser,
    userList
}