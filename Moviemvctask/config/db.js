const monogoose=require("mongoose")
monogoose.connect("mongodb://localhost:27017/vishu")
const db=monogoose.connection

db.on("connected",(data,err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('database connected')
    }
})