const express=require("express")
const {Register,Delete,Edit} = require("../Controller/Usercontroller")
const U_router=express.Router()
U_router.post("/register",Register)
U_router.delete("/delete/:id",Delete)
U_router.put("/edit/:id",Edit)
module.exports=U_router