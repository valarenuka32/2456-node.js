const { product } = require("../models");

const productCreate = async (reqBody) => {
    return product.create(reqBody);
};

const getProductByName = async (product_name) => {
    return product.findOne({ product_name });
};
module.exports = {
    productCreate,
    getProductByName
};