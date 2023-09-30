const express=require("express");
const {blogValidation}=require("../validations");
const {blogController}=require("../controllers");
const validate=require("../middlewares/validate");


const router=express.Router();

// create router
router.post{
    "/create-route",
    validate(blogValidation.createrBlog),
    blogController.createrBlog
};

module.exports=router;