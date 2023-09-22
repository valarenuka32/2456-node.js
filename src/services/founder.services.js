const { founder } = require("../models");

/**
 * Create founder
 * @param {object} reqBody
 * @returns {Promise<founder>}
 */
const createFounder = async (reqBody) => {
    return founder.create(reqBody);
};

const founderList = async (req, res) => {
    return founder.find();
};

const deleteRecord = async (founderId) => {
    return founder.findByIdAndDelete(founderId);
};

const getfounderById = async (founderId) => {
    return founder.findById(founderId);
};

const updateDetiles = async (founderId, updateBody) => {
    return founder.findByIdAndUpdate(founderId, { $set: updateBody });
};

const getfounderByName = async (first_name) => {
    return founder.findOne({ first_name });
};

module.exports = {
    createFounder,
    founderList,
    deleteRecord,
    getfounderById,
    updateDetiles,
    getfounderByName
};