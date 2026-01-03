const categorydata = require("../modal/categoryM")
const subcategory = require("../modal/subcategoryM")

const getcategory=async(req,res)=>{
    const category=await categorydata.find({})
    res.render("subcategory",{category})
}
const addcategory=async(req,res)=>{
    const {title,categoryId}=req.body

    await subcategory.create({
        title:title,
        categoryId:categoryId
    })
    res.redirect("/subcategories")
}
module.exports={getcategory,addcategory}