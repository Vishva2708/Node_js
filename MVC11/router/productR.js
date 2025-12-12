const { productpost, products, productdelete, productUpdate } = require("../controller/productC")
const express=require("express")
const P_router=express.Router()
P_router.post("/",productpost)
P_router.delete("/:id",productdelete)
P_router.patch("/:id",productUpdate)
P_router.get("/",products)
module.exports=P_router