const mongoose=require("mongoose")
const categorySchema=mongoose.Schema({
    name:{
        type:String
    },
      price:{
        type:String
    },
      qty:{
        type:String
    }
})
const categorydata=mongoose.model("category",categorySchema)
module.exports=categorydata