const mongoose=require("mongoose")
const user=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    image:{
        type:[String]
    }
})
const usermodal=mongoose.model("vishu@2708",user)
module.exports=usermodal