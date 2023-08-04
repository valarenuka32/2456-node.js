const mongoose = require("mongoose");

const categoryschema = new mongoose.Schema(
    {
        category_name:{
            type:String,
            trim:true,
        },
        
    }
)