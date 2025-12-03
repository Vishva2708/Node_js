const express=require("express")
const app=express()
app.set("view engine","ejs")
app.use(express.urlencoded())
app.use(express.json())
const db=require("./config/db")
const M_router = require("./Router/MovieR")
app.use("/movii",M_router)

app.listen(3400,()=>{
    console.log('server listen')
})