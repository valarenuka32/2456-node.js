const { result } = require("../models");

/**
 * Create result
 * @param {object} reqBody
 * @returns {Promise<result>}
 */
const createResult = async (reqBody) => {
    return result.create(reqBody);
};

const resultList = async (req, res) => {
    return result.find();
};

const deleteRecord = async (resultId) => {
    return result.findByIdAndDelete(resultId);
};

const getresultById = async (resultId) => {
    return result.findById(resultId);
};

const updateDetiles = async (resultId, updateBody) => {
    return result.findByIdAndUpdate(resultId, { $set: updateBody });
};

const getresultByName = async (first_name) => {
    return result.findOne({ first_name });
}


module.exports = {
    createResult,
    resultList,
    deleteRecord,
    getresultById,
    updateDetiles,
    getresultByName
};