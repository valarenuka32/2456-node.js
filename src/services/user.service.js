const { user } = require("../models");

//user
const createUser = async (reqBody) => {
    return user.create(reqBody);
};

const userList = async (req, res) => {
    return user.find();
};

const deleteRecode = async (userId) => {
    return user.findByIdAndDelete(userId);
};

const updateDetiles = async (userId, updateBody) => {
    return user.findByIdAndUpdate(userId, { $set: updateBody });
};

const getuserById = async (userId) => {
    return user.findById(userId);
};

module.exports = {
    createUser,
    userList,
    deleteRecode,
    updateDetiles,
    getuserById
};