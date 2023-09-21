const { sport_category } = require("../models");

/**
 * Create sport_category
 * @param {object} reqBody
 * @returns {Promise<sport_category>}
 */
const createSport_category = async (reqBody) => {
    return sport_category.create(reqBody);
};

const sport_categoryList = async (req, res) => {
    return sport_category.find();
};

const deleteRecord = async (sport_categoryId) => {
    return sport_category.findByIdAndDelete(sport_categoryId);
};

const getsport_categoryById = async (sport_categoryId) => {
    return sport_category.findById(sport_categoryId);
};

const updateDetiles = async (sport_categoryId, updateBody) => {
    return sport_category.findByIdAndUpdate(sport_categoryId, { $set: updateBody });
};

const getsport_categoryByName = async (first_name) => {
    return sport_category.findOne({ first_name });
}


module.exports = {
    createSport_category,
    sport_categoryList,
    deleteRecord,
    getsport_categoryById,
    updateDetiles,
    getsport_categoryByName
};