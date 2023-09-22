const { player } = require("../models");

/**
 * Create player
 * @param {object} reqBody
 * @returns {Promise<player>}
 */
const createPlayer = async (reqBody) => {
    return player.create(reqBody);
};

const playerList = async (req, res) => {
    return player.find();
};

const deleteRecord = async (playerId) => {
    return player.findByIdAndDelete(playerId);
};

const getplayerById = async (playerId) => {
    return player.findById(playerId);
};

const updateDetiles = async (playerId, updateBody) => {
    return player.findByIdAndUpdate(playerId, { $set: updateBody });
};

const getplayerByName = async (first_name) => {
    return player.findOne({ first_name });
}


module.exports = {
    createPlayer,
    playerList,
    deleteRecord,
    getplayerById,
    updateDetiles,
    getplayerByName
};