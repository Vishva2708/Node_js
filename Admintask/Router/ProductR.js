const express = require("express")
const verifytoken = require("../middleware/token")
const { getpro, ImageUpload, categorypro, register, deletepro, editpage, updatepro } = require("../controller/productC")

const P_route = express.Router()

P_route.get("/", verifytoken, getpro)
P_route.post("/insertdata", ImageUpload, register)
P_route.get("/category/:categoryId", verifytoken, categorypro)
P_route.get("/delete/:id", deletepro)
P_route.get("/edit/:id", editpage)
P_route.post("/update/:id", ImageUpload, updatepro)

module.exports = P_route
