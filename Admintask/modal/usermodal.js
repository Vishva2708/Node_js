const mongoose=require("mongoose")
const product=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})
const user=mongoose.model("userdata",product)
module.exports=user