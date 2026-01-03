const express=require("express")
const { register, getdata, getlogin, login } = require("../controller/userC")

const R_router=express.Router()
R_router.post("/register",register)
R_router.get("/",getdata)
R_router.get("/login",getlogin)
R_router.post("/login",login)

module.exports=R_router