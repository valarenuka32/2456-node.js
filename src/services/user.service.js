const { user } = require("../models");

const createUser = async (reqBody) => {
    return user.create(reqBody)
};
const userList = async (req, res) => {
    return user.find()
};

const getUserById = async (req, res) => {
    return user.findById()
};

const updateRecode = async (userId, updateBody) => {
    return user.findByIdAndUpdate(userId, { $set: updateBody });
};

const deleteRecode = async (userId) => {
    return user.findByIdAndDelete(userId);
};

module.exports = {
    createUser,
    userList,
    getUserById,
    updateRecode,
    deleteRecode
}