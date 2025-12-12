const categorydata = require("../modal/categoryM")

const categorypost=async(req,res)=>{
    const data=await categorydata.create(req.body)
    res.send(data)
}
const categories=async(req,res)=>{
   const data= await categorydata.find({})
    res.send(data)
}
const categorydelete=async(req,res)=>{
    const data=  await categorydata.findByIdAndDelete(req.params.id)
    res.send("success ")
}
const categoryUpdate=async(req,res)=>{
    const data=  await categorydata.findByIdAndUpdate(req.params.id,req.body)
    res.send(data)
}
module.exports={categories,categorypost,categorydelete,categoryUpdate}