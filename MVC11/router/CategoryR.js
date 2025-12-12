const express=require("express")
const { categories, categorydelete, categorypost, categoryUpdate } = require("../controller/categoryC")
const C_router=express.Router()
C_router.post("/",categorypost)
C_router.delete("/:id",categorydelete)
C_router.patch("/:id",categoryUpdate)
C_router.get("/",categories)
module.exports=C_router