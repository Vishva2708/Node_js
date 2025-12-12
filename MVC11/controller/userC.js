const user = require("../modal/userM")

const register=async(req,res)=>{
   const data= await user.create(req.body)
    res.send(data)
}
const registerget=async(req,res)=>{
    const data=await user.find({})
    res.send(data)
}
const Login=async(req,res)=>{
     const {username,password}=req.body
     const data=await user.findOne({username:username})
     if(!data){
        return res.send("username not found")
     }
     else if(data.password != password){
        return res.send("password not match")
     }
     res.send("success")
}

module.exports={register,registerget,Login}
