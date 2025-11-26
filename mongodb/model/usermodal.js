const mongoose=require("mongoose")
const bookSchema =mongoose.Schema({
    bookname:{
        type:String
    },
    author:{
        type:String
    },
    price:{
        type:String
    },
    category:{
        type:String
    }
})
const Book=mongoose.model("books",bookSchema)
module.exports=Book