const express = require("express");
const blogRouter = require("./blog.route");
const imageRouter = require("./image.route");


const router = express.Router();
router.use("/blog", blogRouter);
router.use("/image", imageRouter);

module.exports = router;