const categorydata = require("../modal/categoryM")

const adddata=async(req,res)=>{
    await categorydata.create(req.body)
    res.redirect("/categories")
}
const gotdata=async(req,res)=>{
     const data = await categorydata.find({});
    res.render("category", { data })
}
module.exports={adddata,gotdata}