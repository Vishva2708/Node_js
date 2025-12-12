const express=require("express")
const { proRegister, productget, DeleteProduct, UpdateProduct } = require("../Controller/productcontroller")
const P_router=express.Router()

P_router.post("/",proRegister);
P_router.get("/", productget);
P_router.delete("/:id" , DeleteProduct);
P_router.patch("/:id", UpdateProduct)


module.exports=P_router