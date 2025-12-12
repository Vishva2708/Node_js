const express=require("express");
const { categories, categoryget, Deletecategory, Updatecategory } = require("../Controller/categorycontroller");
const C_router=express.Router()

C_router.post("/",categories);
C_router.get("/", categoryget);
C_router.delete("/:id" , Deletecategory);
C_router.patch("/:id", Updatecategory)

module.exports=C_router
