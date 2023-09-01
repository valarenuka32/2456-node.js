const { productService } = require("../Service");

// create product
const productCreate = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const productex = await productService.getProductByName(reqBody.product_name);
        if (productex) {
            throw new Error(`please add other product this ${productex.product_name} product already created`)
        }
        const product = await productService.productCreate(reqBody);

        res.status(200).json({
            success: true,
            message: 'product creat succesfully',
            data: { product },
        });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    productCreate
}