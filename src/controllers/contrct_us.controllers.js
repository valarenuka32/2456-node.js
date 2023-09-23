const { contect_usService } = require("../services");

/** create contect_us */
const createContect_us = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const contect_us=await contect_usService.createContect_us(reqBody);

        res.status(200).json({
            success: true,
            message: "contect_us detiles create successfully!",
            data: { contect_us },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get contect_us list
const contect_usList = async (req, res) => {
    try {
        const getList = await contect_usService.contect_usList();

        res.status(200).json({
            success: true,
            message: "Get contect_us list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// // delete list
const deleteRecord = async (req, res) => {
    try {
        const contect_usId = req.params.contect_usId;
        const contect_usEx = await contect_usService.getcontect_usById(contect_usId);
        if (!contect_usEx) {
            throw new Error("contect_us detiles not found!");
        }

        await contect_usService.deleteRecord(contect_usId);

        res.status(200).json({
            success: true,
            message: "contect_us detiles delete successfully!",
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
        const contect_usId = req.params.contect_usId;

        const contect_usEx = await contect_usService.getcontect_usById(contect_usId);
        if (!contect_usEx) {
            throw new Error("contect_us not found!");
        }

        await contect_usService.updateDetiles(contect_usId, req.body);

        res.status(200).json({
            success: true,
            message: "contect_us details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createContect_us,
    contect_usList,
    deleteRecord,
    updateDetiles
};

