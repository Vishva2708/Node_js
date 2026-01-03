const express=require("express")
const app=express()
app.set("view engine","ejs")
app.use(express.urlencoded())

var student=[
    {id:1,name:"vishu"}
]

app.get("/",(req,res)=>{
    res.render("home",{student})
})
app.post("/data",(req,res)=>{
    const {id,name}=req.body
    const ans={id:id,name:name}
    student.push(ans)
    res.redirect("/")
})

app.listen(3400,()=>{
    console.log("server listen")
})