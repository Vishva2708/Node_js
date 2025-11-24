const mongoose=require("mongoose")

const userschema=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})
const usermodal=mongoose.model("user",userschema)
module.exports=usermodal