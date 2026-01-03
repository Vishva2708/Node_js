const express=require("express")
const { getcategory, addcategory } = require("../controller/subcategoryC")
const sub_route=express.Router()

sub_route.get("/",getcategory)
sub_route.post("/add",addcategory)

module.exports=sub_route