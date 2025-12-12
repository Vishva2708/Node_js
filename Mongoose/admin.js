const express=require("express")
const usermodal = require("./usermodal/modal")
const app=express()
const multer=require("multer")
const path=require("path")
const db=require("./config/db")
app.set("view engine","ejs")
app.use(express.urlencoded())
app.use("/upload",express.static(path.join(__dirname,"upload")))

const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,"upload/")
  },
  filename:function(req,file,cb){
    cb(null,file.originalname)
  }
})
const imgupload=multer({storage:storage}).single("image")

app.get("/",async(req,res)=>{
  const data= await usermodal.find({})
  res.render("home",{data})
})
app.post("/data",imgupload,async(req,res)=>{
  const {username,password}=req.body
  let image=''
  if(req.file){
    image=req.file.path
  }
  await usermodal.create({username,password,image}).then((data)=>{
    console.log(data)
  }).catch((err)=>{
    console.log(err)
  })
  res.redirect("/")
})
app.get("/delete",async(req,res)=>{
  const id=req.query.id
  await usermodal.findByIdAndDelete(id)
  res.redirect("/")
})
app.get("/edit",async(req,res)=>{
  const id=req.query.id
  const userdata= await usermodal.findById(id)
  res.render("edits",{userdata})
})
app.post("/editdata",async(req,res)=>{
   await usermodal.findByIdAndUpdate(req.body.id,req.body)
   res.redirect("/")
})
app.listen(3003,()=>{
  console.log('server listen')
})