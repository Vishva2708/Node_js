const expres=require("express")
const { adddata, gotdata } = require("../controller/categoryC")
const C_route=expres.Router()

C_route.get("/",gotdata)
C_route.post("/",adddata)

module.exports=C_route