const { mobile } = require("../models");

const mobileCreate = async (reqBody) => {
    return mobile.create(reqBody);
};

const getMobileList = async (req, res) => {
    return mobile.find();
};

const deleteRecord = async (mobileId) => {
    return mobile.findByIdAndDelete(mobileId);
};

const getmobileId = async (mobileId) => {
    return mobile.findById(mobileId);
};

const updateDetiles = async (mobileId, updateBody) => {
    return mobile.findByIdAndUpdate(mobileId, { $set: updateBody })
};

const getMobileByName = async (mobile_brand) => {
    return mobile.findOne({ mobile_brand });
};

module.exports = {
    mobileCreate,
    getMobileList,
    deleteRecord,
    getmobileId,
    updateDetiles,
    getMobileByName
}