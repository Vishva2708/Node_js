const user = require("../modal/usermodal");
const jwt=require("jsonwebtoken")

const register = async (req, res) => {
  await user.create(req.body);
  res.redirect("/userdata/login");
};

const getdata = async (req, res) => {
  const data = await user.find({});
  res.render("user",{data});
};
const login = async (req, res) => {
  const { username, password } = req.body;
  const data = await user.findOne({ username: username });
  if (!data) {
    return res.send("username not found");
  }
  if (data.password != password) {
    return res.send("password not match");
  }
  if (data && data.password == password) {
    const payload = {
      username: data.password,
      id: data.id,
    };
    const token = jwt.sign(payload, "private-key");
    console.log(token);
    res.cookie("token", token).redirect("/products");

  }

};
const getlogin = (req, res) => {
  res.render("login");
};
module.exports = { register, getdata, login,getlogin };
