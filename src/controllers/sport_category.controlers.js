const { sport_categoryService } = require("../services");

/** create sport_category */
const createSport_category = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const sport_category=await sport_categoryService.createSport_category(reqBody);

        res.status(200).json({
            success: true,
            message: "sport_category detiles create successfully!",
            data: { sport_category },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get sport_category list
const sport_categoryList = async (req, res) => {
    try {
        const getList = await sport_categoryService.sport_categoryList();

        res.status(200).json({
            success: true,
            message: "Get sport_category list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// // delete list
const deleteRecord = async (req, res) => {
    try {
        const sport_categoryId = req.params.sport_categoryId;
        const sport_categoryEx = await sport_categoryService.getsport_categoryById(sport_categoryId);
        if (!sport_categoryEx) {
            throw new Error("sport_category detiles not found!");
        }

        await sport_categoryService.deleteRecord(sport_categoryId);

        res.status(200).json({
            success: true,
            message: "sport_category detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// // update detiles
const updateDetiles = async (req, res) => {
    try {
        const sport_categoryId = req.params.sport_categoryId;

        const sport_categoryEx = await sport_categoryService.getsport_categoryById(sport_categoryId);
        if (!sport_categoryEx) {
            throw new Error("sport_category not found!");
        }

        await sport_categoryService.updateDetiles(sport_categoryId, req.body);

        res.status(200).json({
            success: true,
            message: "sport_category details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createSport_category,
    sport_categoryList,
    deleteRecord,
    updateDetiles
};

