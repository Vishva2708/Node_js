const mongoose=require("mongoose")

const products=mongoose.Schema({
    title:{
        type:String
    },
    category:{
        type:String
    },
    price:{
        type:String
    },
     qty:{
        type:String
    },
    categoryId:{
        type:mongoose.Schema.Types.String,
        ref:'category'
    }
    
})
const productmodal=mongoose.model("pro",products)
module.exports=productmodal