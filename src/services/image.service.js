const { images } = require("../models");

const createImage = async (reqBody) => {
    return images.create(reqBody);
};

const imagesList = async (req, res) => {
    return images.find();
};

const deleteRecode = async (imagesId) => {
    return images.findByIdAndDelete(imagesId);
};

const updateRecode = async (imagesId, updateBody) => {
    return images.findByIdAndUpdate(imagesId, { $set: updateBody });
};

const getimagesById = async (imagesId) => {
    return images.findById(imagesId);
};
module.exports = {
    createImage,
    imagesList,
    deleteRecode,
    updateRecode,
    getimagesById
};