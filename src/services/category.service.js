const { category } = require("../models");

const createCategory = async (reqBody) => {
    return category.create(reqBody);
};

const categoryList = async (req, res) => {
    return category.find();
};

const deleteRecode = async (categoryId) => {
    return category.findByIdAndDelete(categoryId);
};

const updateRecode = async (categoryId, updateBody) => {
    return category.findByIdAndUpdate(categoryId, { $set: updateBody });
};

const getcategoryById = async (categoryId) => {
    return category.findById(categoryId);
};
module.exports = {
    createCategory,
    categoryList,
    deleteRecode,
    updateRecode,
    getcategoryById
};