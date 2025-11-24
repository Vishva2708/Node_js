const usermodal=require("../Modal/user")

const Register=async(req,res)=>{
    const data=await usermodal.create(req.body)
    res.send(data)
}
const Delete=async(req,res)=>{
    const id=req.params.id
   await usermodal.findByIdAndDelete(id)
    res.send("successfuully delete")
}
const Edit=async(req,res)=>{
    const id=req.params.id
    const dat=await usermodal.findByIdAndUpdate(id,req.body)
    res.send(dat)}
module.exports={Register,Delete,Edit}