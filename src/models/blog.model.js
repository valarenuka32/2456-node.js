const mongoose=require("mongoose");

const blodSchema=new mongoose.Schema(
    {
        blog_name:{
            type:String,
            trim:true,
        },
        blog_description:{
            type:String,
            trim:true,
        },
        is_active:{
            type:Boolean,
            default:false,
        },
    },
    {
        time
    }
)