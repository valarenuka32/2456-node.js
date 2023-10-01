const express = require("express");
const blogRouter = require("./blog.route");
const imageRouter = require("./image.route");
const categoryRouter = require("./category.route");
const userRouter = require("./user.route");


const router = express.Router();

router.use("/blog", blogRouter);
router.use("/image", imageRouter);
router.use("/category", categoryRouter);
router.use("/user", userRouter);

module.exports = router;