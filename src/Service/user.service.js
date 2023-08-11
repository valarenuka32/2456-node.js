const { User } = require("../models");

const createUser = async (reqBody) => {
    return User.create(reqBody);
};

const getUserList = async (filter, options) => {
    const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

    return User.find(filter).skip(skip).limit(options.limit).select("-password");
};
module.exports = {
    createUser
};