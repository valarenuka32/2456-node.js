const { coach } = require("../models");

/**
 * Create coach
 * @param {object} reqBody
 * @returns {Promise<coach>}
 */
const createCoach = async (reqBody) => {
    return coach.create(reqBody);
};

const coachList = async (req, res) => {
    return coach.find();
};

const deleteRecord = async (coachId) => {
    return coach.findByIdAndDelete(coachId);
};

const getcoachById = async (coachId) => {
    return coach.findById(coachId);
};

const updateDetiles = async (coachId, updateBody) => {
    return coach.findByIdAndUpdate(coachId, { $set: updateBody });
};

const getcoachByName = async (first_name) => {
    return coach.findOne({ first_name });
}


module.exports = {
    createCoach,
    coachList,
    deleteRecord,
    getcoachById,
    updateDetiles,
    getcoachByName
};