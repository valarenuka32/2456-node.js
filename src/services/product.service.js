const { product } = require("../models");

// product
const createProduct = async (reqbody) => {
    return product.create(reqbody);
};

const productList = async (req, res) => {
    return product.find();
};

const updateDetiles = async (productId, updateBody) => {
    return product.findByIdAndUpdate(productId, { $set: updateBody });
};

const deleteRecode = async (productId) => {
    return product.findByIdAndDelete(productId);
};

const getproductById = async (productId) => {
    return productId.findById(productId);
};

module.exports = {
    createProduct,
    productList,
    updateDetiles,
    deleteRecode,
    getproductById
};