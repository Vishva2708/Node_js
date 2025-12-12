const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
    name:{
        type:String
    },
      price:{
        type:String
    },
      qty:{
        type:String
    },
      category:{
        type:String
    },
    categoryId:{
        type:mongoose.Schema.Types.String,
        ref:"category"
    }
})
const productdata=mongoose.model("products",productSchema)
module.exports=productdata