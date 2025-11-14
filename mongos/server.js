const express=require("express")
const app=express()
const db=require("./config/db")

app.listen(4700,()=>{
    console.log('server listen')
})