const { sportsgallery } = require("../models");

/**
 * Create sportsgallery
 * @param {object} reqBody
 * @returns {Promise<sportsgallery>}
 */
const createsportsgallery = async (reqBody) => {
    return sportsgallery.create(reqBody);
};

const sportsgalleryList = async (req, res) => {
    return sportsgallery.find();
};

const deleteRecord = async (sportsgalleryId) => {
    return sportsgallery.findByIdAndDelete(sportsgalleryId);
};

const getsportsgalleryById = async (sportsgalleryId) => {
    return sportsgallery.findById(sportsgalleryId);
};

const updateDetiles = async (sportsgalleryId, updateBody) => {
    return sportsgallery.findByIdAndUpdate(sportsgalleryId, { $set: updateBody });
};

// const getsportsgalleryByName = async (first_name) => {
//     return sportsgallery.findOne({ first_name });
// }


module.exports = {
    createsportsgallery,
    sportsgalleryList,
    deleteRecord,
    getsportsgalleryById,
    updateDetiles,
    // getsportsgalleryByName
};