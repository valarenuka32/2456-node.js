const { productService } = require("../services");

// create product
const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const product = await productService.createProduct(reqBody);
        if (!product) {
            throw new Error("somthing went wrong, please try again on later!")
        }

        res.status(200).json({
            success: true,
            message: "product create successfully!",
            data: (product),
        })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// product list
const productList = async (req, res) => {
    try {
        const getProduct = await productService.productList();

        res.status(200).json({
            success: true,
            message: "product get successfully",
            data: (getProduct)
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update product
const updateDetiles = async (req, res) => {
    try {
        const productId = req.params.productId;

        const productEx = await productService.getproductById(productId);
        if (!productEx) {
            throw new Error("product not found");
        }
        await productService.updateDetiles(productId, req.body);
        res.status(200).json({
            success: true,
            message: "product detiles update successfully! "
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete recode
const deleteRecode = async (req, res) => {
    try {
        const productId = req.params.productId;
        const productEx=await productService.getproductById(productId);
        if(!productEx){
            throw new Error ("product not found");
        }
        await productService.deleteRecode(productId,req.body);
        res.status(200).json({
            success:true,
            message:"product delete successfully !"
        })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createProduct,
    productList,
    updateDetiles,
    deleteRecode
}