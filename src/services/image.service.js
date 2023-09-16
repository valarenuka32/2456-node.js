const { image } = require("../models");

// images
const createImage = async (reqbody) => {
    return image.create(reqbody);
};

const imageList = async (req, res) => {
    return image.find();
};

const deleteImg = async (imageId) => {
    return image.findByIdDelete(imageId);
};

const updateImg = async (imageId, updateBody) => {
    return image.findByIdUpdate(imageId, { $set: updateBody });
};

const getImageById = async (imageId) => {
    return image.findById(imageId);
}
module.exports = {
    createImage,
    imageList,
    deleteImg,
    updateImg,
    getImageById
};