const categorymodal = require("../Modal/Categorymodal")

const categories=async(req,res)=>{
    const data=await categorymodal.create(req.body)
    res.send(data)
}
const categoryget=async(req,res)=>{
    const data=await categorymodal.find({})
    res.find(data)
}
const Deletecategory = async(req,res)=>{
    const id = req.params.id
    await categorymodal.findByIdAndDelete(id);
    res.send("success")
}
const Updatecategory = async (req,res)=>{
    const id = req.params.id;
    const data = await categorymodal.findByIdAndUpdate(id, req.body);
    res.send(data)
}

module.exports={categories,categoryget,Deletecategory,Updatecategory}