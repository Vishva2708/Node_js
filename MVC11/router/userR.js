const express=require("express")
const { register, registerget, Login } = require("../controller/userC")

const U_router=express.Router()

U_router.post("/",register)
U_router.get("/",registerget)
U_router.post("/login",Login)

module.exports=U_router