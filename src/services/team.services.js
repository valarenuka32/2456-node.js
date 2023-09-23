const { team } = require("../models");

/**
 * Create team
 * @param {object} reqBody
 * @returns {Promise<team>}
 */
const createTeam = async (reqBody) => {
    return team.create(reqBody);
};

const teamList = async (req, res) => {
    return team.find();
};

const deleteRecord = async (teamId) => {
    return team.findByIdAndDelete(teamId);
};

const getteamById = async (teamId) => {
    return team.findById(teamId);
};

const updateDetiles = async (teamId, updateBody) => {
    return team.findByIdAndUpdate(teamId, { $set: updateBody });
};

// const getteamByName = async (first_name) => {
//     return team.findOne({ first_name });
// }


module.exports = {
    createTeam,
    teamList,
    deleteRecord,
    getteamById,
    updateDetiles,
    // getteamByName
};