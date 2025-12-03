const express=require("express")
const { Movies, movieget, movieedit, movieupdate, movieDelete } = require("../Controller/movieC")
const M_router=express.Router()

M_router.post("/movies",Movies)
M_router.get("/",movieget)
M_router.get("/edit",movieedit)
M_router.post("/update",movieupdate)
M_router.get("/delete",movieDelete)
module.exports=M_router