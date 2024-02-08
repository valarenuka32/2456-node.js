const { imagesService } = require("../services");

// create
const createImage = async (req, res) => {
    try {
        const reqBody = req.body;

        if (req.file) {
            reqBody.blog_images = req.file.filename;
        } else {
            throw new Error("image is required");
        }

        const images = await imagesService.createImage(reqBody);
        res.status(200).json({
            success: true,
            message: "images create successfully !",
            data: { images }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// list
const imageList = async (req, res) => {
    try {
        const getList = await imagesService.imageList();
        res.status(200).json({
            success: true,
            message: "get images list sucessfully !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// update
const updateRecode = async (req, res) => {
    try {
        const imagesId = req.params.imagesId;

        const imagesEx = await imagesService.getimagesById(imagesId);
        if (!imagesEx) {
            throw new Error("images not found");
        }
        await imagesService.updateRecode(imagesId, req.body);
        res.status(200).json({
            success: true,
            message: "images details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const imagesId = res.params.req.body;

        const imagesEx = await imagesService.getimagesById(imagesId);
        if (!imagesEx) {
            throw new Error("images detiles not found");
        }
        await imagesService.deleteRecode(imagesId);
        res.status(200).json({
            success: true,
            message: "images detiles delete successfully!"
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};
module.exports = {
    createImage,
    imageList,
    updateRecode,
    deleteRecode
};