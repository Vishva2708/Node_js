const productmodal = require("../Modal/productmodal")

const proRegister=async(req,res)=>{
    const data=await productmodal.create(req.body)
    res.send(data)
}
const productget=async(req,res)=>{
    const data=await productmodal.find({}).populate("categoryId")
    res.send(data)
}
const DeleteProduct = async(req,res)=>{
    const id = req.params.id
    await productmodal.findByIdAndDelete(id);
    res.send("success")
}
const UpdateProduct = async (req,res)=>{
    const id = req.params.id;
    const data = await productmodal.findByIdAndUpdate(id, req.body);
    res.send(data)
}
module.exports={
    proRegister,productget,DeleteProduct,UpdateProduct
}