const express = require("express")
const { postdata, getdata, removedata, BlogEdit, BlogUpdate } = require("../controller/blogpageC")
const isAuth = require("../middleware/isAuth")

const router = express.Router()

router.get("/", isAuth, getdata)
router.post("/blog", isAuth, postdata)
router.get("/delete", isAuth, removedata)

router.get("/edit",isAuth,BlogEdit)
router.post("/editData",isAuth,BlogUpdate)

module.exports = router