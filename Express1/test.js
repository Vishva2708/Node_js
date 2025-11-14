const express=require("express")
const app=express()
app.set("view engine","ejs")
app.use(express.urlencoded())
var student=[{
    id:1,
    name:"vishu"
},{
    id:2,
    name:"bhatt"
}]
app.get("/",(req,res)=>{
    res.render("home",{student})
})
app.get("/delete",(req,res)=>{
    const id=req.query.id
    const ans=student.filter((el)=>el.id!=id)
    student=ans
    res.redirect("/")
})
app.get("/edit",(req,res)=>{
    const id=req.query.id
    const ans=student.find((el)=>el.id==id)
    res.render("edit",{ans})
})
app.post("/editdata",(req,res)=>{
    const {id,name}=req.body
    // const indx=student.findIndex((el)=>el.id==id)
    // if(indx!=-1){
    //     student[indx].name=name
    // }
    student.forEach(el=>{
        if(el.id==id){
            el.name=name
        }
    })
    res.redirect("/")
})
app.post("/data",(req,res)=>{
    const {name}=req.body
    const obj={
        id:student.length+1,name
    }
    student.push(obj)
    res.redirect("/")
})
app.listen(4004,()=>{
    console.log('server listen')
})