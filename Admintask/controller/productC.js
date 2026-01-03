const multer = require("multer")
const categorydata = require("../modal/categoryM")
const products = require("../modal/ProductM")
const subcategory = require("../modal/subcategoryM")

const register = async (req, res) => {
    const { title, price, brand, categoryId, subCategoryId } = req.body

    let image = ""
    if (req.file) {
        image = req.file.path
    }

    await products.create({
        title,
        price,
        brand,
        image,
        categoryId,
        subCategoryId
    })

    res.redirect("/products")
}

const getpro = async (req, res) => {
    const user = await products
        .find({})
        .populate("categoryId")
        .populate("subCategoryId")

    const category = await categorydata.find({})
    const subcat = await subcategory.find({})

    res.render("product", { user, category, subcat })
}

const categorypro = async (req, res) => {
    const { categoryId } = req.params

    const user = await products
        .find({ categoryId })
        .populate("categoryId")
        .populate("subCategoryId")

    const category = await categorydata.find({})
    const subcat = await subcategory.find({})

    res.render("product", { user, category, subcat })
}

const deletepro = async (req, res) => {
    const { id } = req.params
    await products.findByIdAndDelete(id)
    res.redirect("/products")
}

const editpage = async (req, res) => {
    const { id } = req.params

    const product = await products
        .findById(id)
        .populate("categoryId")
        .populate("subCategoryId")

    const category = await categorydata.find({})
    const subcat = await subcategory.find({})

    res.render("edit", { product, category, subcat })
}

const updatepro = async (req, res) => {
    const { id } = req.params
    const { title, price, brand, categoryId, subCategoryId } = req.body

    let image = req.body.oldimage
    if (req.file) {
        image = req.file.path
    }

    await products.findByIdAndUpdate(id, {
        title,
        price,
        brand,
        image,
        categoryId,
        subCategoryId
    })

    res.redirect("/products")
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload/")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const ImageUpload = multer({ storage }).single("image")

module.exports = {
    register,
    getpro,
    categorypro,
    ImageUpload,
    deletepro,
    editpage,
    updatepro
}
