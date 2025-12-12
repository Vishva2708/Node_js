const express=require("express")
const { default: mongoose } = require("mongoose")
const categorySchema=mongoose.Schema({
    title:{
        type:String
    },
    qty:{
        type:String
    },
    price:{
        type:String
    }
})
const categorymodal=mongoose.model("category",categorySchema)
module.exports=categorymodal