const multer = require("multer")
const categorydata = require("../modal/categoryM")
const products = require("../modal/ProductM")

const register=async(req,res)=>{
    const {title,price,category,brand,categoryId}=req.body
    let image=''
    if(req.file){
        image=req.file.path
    }
    await products.create({
        title:title,
        category:category,
        price:price,
        brand:brand,
        image:image,
        categoryId:categoryId
    })
    res.redirect("/products")
}
const getpro = async (req, res) => {
    const user = await products.find({}).populate("categoryId")
    const category = await categorydata.find({})
    res.render("product", { user, category })
}
const categorypro = async (req, res) => {
    const { categoryId } = req.params
    const user = await products.find({ categoryId }).populate("categoryId")
    const category = await categorydata.find({})
    res.render("product", { user, category })
}
const deletepro = async (req, res) => {
    const { id } = req.params
    await products.findByIdAndDelete(id)
    res.redirect("/products")
}
const editpage = async (req, res) => {
    const { id } = req.params
    const product = await products.findById(id)
    const category = await categorydata.find({})
    res.render("edit", { product, category })
}
const updatepro = async (req, res) => {
    const { id } = req.params
    const { title, price, category, brand, categoryId } = req.body

    let image = req.body.oldimage

    if (req.file) {
        image = req.file.path
    }

    await products.findByIdAndUpdate(id, {
        title,
        price,
        category,
        brand,
        image,
        categoryId
    })

    res.redirect("/products")
}

const storage=multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,"upload/")
    },
    filename:function(Req,file,cb){
        cb(null,file.originalname)
    }
})

const ImageUpload = multer({ storage: storage }).single("image")

module.exports={
    register,getpro,categorypro,ImageUpload,deletepro,editpage,updatepro
}
