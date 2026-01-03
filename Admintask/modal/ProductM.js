const mongoose=require("mongoose")
const pro=mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:String
    },
    image:{
        type:String
    },
    category:{
        type:String 
    },
    brand:{
        type:String
    },
     categoryId: {
        type: mongoose.Schema.Types.String,
        ref: "category"
    }
})
const products=mongoose.model("product",pro)
module.exports=products