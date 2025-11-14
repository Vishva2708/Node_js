const express=require('express')
const app=express()
app.set("view engine",'ejs')
app.use(express.urlencoded())
var student=[{
     "id":1,
    "name":"vishva"
},
{
    "id":2,
    "name":'dimpi'
}
]
app.get("/",(req,res)=>{
    // res.send('home page')
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
   const index= student.findIndex(el=>el.id==id)
   if(index!==-1){
    student[index].name=name
   }
    res.redirect('/')
})

// app.post("/insertdata",(req,res)=>{
//     const {id,name}=req.body
//     const obj={
//         id,name
//     }
//     student.push(obj)
//     res.redirect('/')
// })
app.post("/insertdata", (req, res) => {
    const { name } = req.body;

    const obj = {
        id: student.length + 1,  
        name
    };

    student.push(obj);
    res.redirect("/");
});

app.listen(4000,()=>{
    console.log('server listen')
})