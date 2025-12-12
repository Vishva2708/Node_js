const productdata = require("../modal/productM")

const productpost=async(req,res)=>{
    const data=await productdata.create(req.body)
    res.send(data)
}

const products=async(req,res)=>{
   const data= await productdata.find({}).populate('categoryId')
    res.send(data)
}
const productdelete=async(req,res)=>{
    const data=  await productdata.findByIdAndDelete(req.params.id)
    res.send("success ")
}
const productUpdate=async(req,res)=>{
    const data=  await productdata.findByIdAndUpdate(req.params.id,req.body)
    res.send(data)
}
module.exports={products,productpost,productdelete,productUpdate}