const { blog } = require("../models");

const createBlog = async (reqBody) => {
    return blog.create(reqBody);
};

const blogList = async (req, res) => {
    return blog.find()
    .populate("images");
};

const deleteRecode = async (blogId) => {
    return blog.findByIdAndDelete(blogId);
};

const updateRecode = async (blogId, updateBody) => {
    return blog.findByIdAndUpdate(blogId, { $set: updateBody });
};

const getBlogById = async (blogId) => {
    return blog.findById(blogId);
};
module.exports = {
    createBlog,
    blogList,
    deleteRecode,
    updateRecode,
    getBlogById
};