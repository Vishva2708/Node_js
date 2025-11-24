const express=require('express')
const app=express()
app.set('view engine','ejs')
app.use(express.static(__dirname+"/public"))
app.get("/",(req,res)=>{
    // res.send("home")
    res.render('index')
})

app.listen(4000,()=>{
    console.log('server listen')
})