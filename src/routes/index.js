const express = require("express");
const blogRouter = require("./blog.route");


const router = express.Router();
router.use("/blog", blogRouter);

module.exports = router;