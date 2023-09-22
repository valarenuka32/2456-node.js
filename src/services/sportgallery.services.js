const { sportgallery } = require("../models");

/**
 * Create sportgallery
 * @param {object} reqBody
 * @returns {Promise<sportgallery>}
 */
const createsportGallery = async (reqBody) => {
    return sportgallery.create(reqBody);
};

const sportGalleryList = async (req, res) => {
    return sportgallery.find();
};

const deleteRecord = async (sportgalleryId) => {
    return sportgallery.findByIdAndDelete(sportgalleryId);
};

const getsportgalleryById = async (sportgalleryId) => {
    return sportgallery.findById(sportgalleryId);
};

const updateDetiles = async (sportgalleryId, updateBody) => {
    return sportgallery.findByIdAndUpdate(sportgalleryId, { $set: updateBody });
};

// const getsportgalleryByName = async (first_name) => {
//     return sportgallery.findOne({ first_name });
// }


module.exports = {
    createsportGallery,
    sportGalleryList,
    deleteRecord,
    getsportgalleryById,
    updateDetiles,
    // getsportgalleryByName
};