const express=require('express')
const app=express()
app.set('view engine','ejs')
app.use(express.urlencoded())
app.use(express.static(_dirname+"/public"))
 var student=[{
    id:1,
    name:'vishu'
 },
 {
     id:2,
    name:'teju'
 }
]
app.get("/",(req,res)=>{
    // res.send("home")
    res.render('home',{student})
})
app.get("/delete",(req,res)=>{
    const id=req.query.id
    const ans=student.filter((el)=>el.id!=id)
    console.log(ans.id)
    student=ans
    res.redirect("/")
})
app.get("/edit",(req,res)=>{
    const id=req.query.id
    const ans=student.find((el)=>{
        return el.id==id
    })
    res.render("edit",{ans})
})
app.post("/editdata",(req,res)=>{
    const {id,name}=req.body
    const update={id,name}
    student=student.filter(el=>el.id!=id)
    student.push(update)
    res.redirect("/")
})
app.post("/insertdata",(req,res)=>{
    const {name}=req.body
    const obj={
        id:student.length+1,name
    }
    student.push(obj)
    res.redirect("/")
})
app.listen(4000,()=>{
    console.log('server listen')
})