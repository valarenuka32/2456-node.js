const { categoryService } = require("../services");

// create
const createCategory = async (req,res) => {
    try {
        const reqBody = req.body;

        const category = await categoryService.createCategory(reqBody);
        res.status(200).json({
            success: true,
            message: "category create successfully !",
            data: { category }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// list
const categoryList = async () => {
    try {
        const getList = await categoryService.categoryList();
        res.status(200).json({
            success: true,
            message: "get category list sucessfully !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// update
const updateRecode = async () => {
    try {
        const categoryId = req.params.categoryId;

        const categoryEx = await categoryService.getcategoryById(categoryId);
        if (!categoryEx) {
            throw new Error("category not found");
        }
        await categoryService.updateRecode(categoryId, req.body);
        res.status(200).json({
            success: true,
            message: "category details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async () => {
    try {
        const categoryId = res.params.req.body;
        const categoryEx = await categoryService.getcategoryById(categoryId);
        if (!categoryEx) {
            throw new Error("category detiles not found");
        }
        await categoryService.deleteRecode(categoryId);
        res.status(200).json({
            success: true,
            message: "category detiles delete successfully!"
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};
module.exports = {
    createCategory,
    categoryList,
    updateRecode,
    deleteRecode
};