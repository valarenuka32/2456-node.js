const { blogService } = require("../services");

// create
const createBlog = async (req,res) => {
    try {
        const reqBody = req.body;

        const blog = await blogService.createBlog(reqBody);
        res.status(200).json({
            success: true,
            message: "blog create successfully !",
            data: { blog }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// list
const blogList = async () => {
    try {
        const getList = await blogService.blogList();
        res.status(200).json({
            success: true,
            message: "get blog list sucessfully !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// update
const updateRecode = async () => {
    try {
        const blogId = req.params.blogId;

        const blogEx = await blogService.getBlogById(blogId);
        if (!blogEx) {
            throw new Error("blog not found");
        }
        await blogService.updateRecode(blogId, req.body);
        res.status(200).json({
            success: true,
            message: "blog details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async () => {
    try {
        const blogId = res.params.req.body;
        const blogEx = await blogService.getBlogById(blogId);
        if (!blogEx) {
            throw new Error("blog detiles not found");
        }
        await blogService.deleteRecode(blogId);
        res.status(200).json({
            success: true,
            message: "blog detiles delete successfully!"
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};
module.exports = {
    createBlog,
    blogList,
    updateRecode,
    deleteRecode
};