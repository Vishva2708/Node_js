const express=require("express")
const app=express()
const db=require("./config/db")
const user=require("./useModal/userModal")
const { use } = require("react")
app.use(express.json())
app.use(express.urlencoded())
app.set("view engine","ejs")


app.post("/data",async(req,res)=>{
    const data=await user.create(req.body)
    res.send(data)
})
app.get("/",async(req,res)=>{
    const usr1= await user.find({})
    // res.send(usr1)
    res.render("home",{usr1})
})
app.get("/delete",async(req,res)=>{
    const id=req.query.id
    const userdata=await user.findByIdAndDelete(id)
    res.redirect("/")
})
app.get("/edit", async(req,res)=>{
    const data = await user.findById(req.query.id);
    res.render("edits", {data});
});
app.post("/editdata", async(req,res)=>{
    await user.findByIdAndUpdate(req.body.id,req.body);
    res.redirect("/");
});

app.listen(4700,()=>{
    console.log('server listen')
})