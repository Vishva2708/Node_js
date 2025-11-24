const express = require("express");
const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.set("view engine", "ejs");
const path = require("path");
const db = require("./config/db");
const usermodal = require("./usermodal/modal");
const multer = require("multer");
const { data } = require("react-router-dom");

app.use("/upload", express.static(path.join(__dirname, "upload")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/");
  },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
filename: function (req, file, cb) {
  cb(null, Date.now() + "-" + file.originalname);
}

});

// const upload = multer({ storage: storage }).single("image")
const upload = multer({ storage: storage }).array("image", 3);

app.post("/data", upload, async (req, res) => {
  const { username, password } = req.body;
  let images = [];
  // if(req.files){
  //     images=req.files.path
  // }
  if (req.files) {
    // images = req.files.map((file) => file.path);
    images = req.files.map((file) => file.path)
  }
  await usermodal
    .create({
      username: username,
      password: password,
      // image:image
      image: images,
    })
    // .then((data) => {
    //     res.render(data)
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  // res.send(data)
  res.redirect("/");
});
app.get("/", async (req, res) => {
  await usermodal.find({}).then((data) => {
    res.render("home", { data });
  });
  // res.send(user1)
});
// app.delete("/:id",async(req,res)=>{
//     const id=req.params.id
//     const modal=await usermodal.findByIdAndDelete(id)
//     res.send("sucess")
// })
// app.patch("/:id", async (req, res)=>{
//     const id=req.params.id
//    const mudl = await usermodal.findByIdAndUpdate(id, req.body);
//     res.send(mudl)
// })
app.get("/delete", async (req, res) => {
  await usermodal.findByIdAndDelete(req.query.id);
  res.redirect("/");
});

app.get("/edit", async (req, res) => {
  const userData = await usermodal.findById(req.query.id);
  res.render("edit", { userData });
});

app.post("/editData", async (req, res) => {
  await usermodal.findByIdAndUpdate(req.body.id, req.body);
  res.redirect("/");
});

app.listen(2708, () => {
  console.log("server listen");
});
