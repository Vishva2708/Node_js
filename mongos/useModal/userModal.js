const mongoose=require("mongoose")
const userModal=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})

const user=mongoose.model("vishu123",userModal)
module.exports=user