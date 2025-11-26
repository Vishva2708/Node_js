const express=require("express")
const app=express()
const db=require("./config/db")
const Book = require("./model/usermodal")
app.set("view engine","ejs")
app.use(express.urlencoded())

app.get("/",async(req,res)=>{
    const data=await Book.find({})
    res.render("book",{data})
})

app.post("/bookdata",async(req,res)=>{
    await Book.create(req.body)
    res.redirect("/")
})
app.get("/delete",async(req,res)=>{
    const id=req.query.id
    await Book.findByIdAndDelete(id)
    res.redirect("/")
})
app.get("/edit",async(req,res)=>{
    const id=req.query.id
    const update= await Book.findById(id)
       res.render("edit",{update})
})
app.post("/editdata",async(req,res)=>{
     await Book.findByIdAndUpdate(req.body.id,req.body)
    res.redirect("/")
})
app.listen(3200, () => {
   console.log("Server listen")
})
