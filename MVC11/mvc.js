const express=require("express")
const app=express()
app.use(express.json())
const db=require("./config/db")
const P_router = require("./router/productR")
const C_router = require("./router/CategoryR")
const U_router = require("./router/userR")

app.use("/product",P_router)
app.use("/category",C_router)
app.use("/user",U_router)
app.listen(4006,()=>{
    console.log('server listen')
})