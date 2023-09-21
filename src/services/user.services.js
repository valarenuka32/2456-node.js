const { user } = require("../models");

const userCreate = async (reqBody) => {
    return user.create(reqBody);
};

const userList = async (req, res) => {
    return user.find();
};

const deleteUser = async (userId) => {
    return user.findByIdAndDelete(userId);
};

const updateUser = async (userId, updateBody) => {
    return user.findByIdAndUpdate(userId, { $set: updateBody });
};

const getUserById = async (userId) => {
    return user.findById(userId);
};


module.exports = (
    userCreate,
    userList,
    deleteUser,
    updateUser,
    getUserById
);