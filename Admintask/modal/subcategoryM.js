const mongoose=require("mongoose")
const sub=mongoose.Schema({
    title:{
        type:String
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    }
})
const subcategory=mongoose.model("subcategory",sub)
module.exports=subcategory