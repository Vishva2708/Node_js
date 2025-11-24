const express=require("express")
const app=express()
app.set("view engine","ejs")
// const usermodal = require("./Modal/user")
const db=require("./config/db")
const U_router = require("./Routes/userroutes")
app.use(express.urlencoded())
app.use(express.json())

app.use("/user",U_router)
app.listen(4004,()=>{
    console.log('server listen')
})