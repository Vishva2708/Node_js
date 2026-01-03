const express = require("express");
const app = express();
const db=require("./config/db")
const cookieParser = require("cookie-parser");
const path = require("path");
const R_router = require("./Router/userR");
const P_route = require("./Router/ProductR");
const multer=require("multer");
const C_route = require("./Router/CategoryR");

app.use(express.urlencoded());
app.use(express.json())
app.set("view engine", "ejs");
app.use(cookieParser());
app.use("/upload", express.static(path.join(__dirname, "upload")))
app.use("/userdata", R_router)
app.use("/products",P_route)
app.use("/categories",C_route)

app.listen(3600, () => {
  console.log("server listen");
});
