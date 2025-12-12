const express=require("express");
const con = require("./config/db");
const app=express()
app.use(express.json())

app.post("/insert",(req, res) => {
   con.query("INSERT INTO users SET ?",req.body,(err,data)=>{
    if(err){
        console.log("err")
    }else{
        res.send({data})
    }
   })
});

app.get("/",(req, res) => {
   con.query("SELECT * FROM users",req.body,(err,data)=>{
    if(err){
        console.log(err)
    }else{
        res.send({data})
    }
   })
});

app.delete("/:id",(req, res) => {
   con.query("DELETE FROM users WHERE id = ?",[req.params.id],(err,data)=>{
    if(err){
        console.log(err)
    }else{
        res.send({data})
    }
   })
});

app.patch("/:id",(req, res) => {
   con.query("UPDATE users SET ? WHERE id = ?",[req.body,req.params.id],(err,data)=>{
    if(err){
        console.log(err)
    }else{
        res.send({data})
    }
   })
});

app.listen(3005,()=>{
    console.log("server listen")
})