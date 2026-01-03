const usermodal = require("../Modal/user");
const nodemailer = require("nodemailer");
const Register = async (req, res) => {
  const data = await usermodal.create(req.body);
  // res.send(data)
  res.redirect("/user");
};
const Registerdata = async (req, res) => {
  const data = await usermodal.find({});
  res.render("home", { data });
  // res.send(data)
};
const Login = async (req, res) => {
  const { username, password } = req.body;

  const user = await usermodal.findOne({ username });

  if (!user) {
    return res.send("User not found");
  }

  if (user.password !== password) {
    return res.send("Password not match");
  }

  res.send("Login successful");
};
const password = async (req, res) => {
  const { username, newpassword } = req.body;

  const user = await usermodal.findOne({ username });

  if (!user) {
    return res.send("User not found");
  }

  await usermodal.findByIdAndUpdate(user._id, {
    password: newpassword,
  });

  res.redirect("/user/login");
};
const local = (req, res) => {
  return res.send("successfully");
};

const Delete = async (req, res) => {
  const id = req.params.id;
  await usermodal.findByIdAndDelete(id);
  res.send("successfuully delete");
};
const Edit = async (req, res) => {
  const id = req.params.id;
  const dat = await usermodal.findByIdAndUpdate(id, req.body);
  res.send(dat);
};

const home = async (req, res) => {
  res.render("index");
};
module.exports = {
  Register,
  Delete,
  Edit,
  Login,
  Registerdata,
  home,
  local,
  password,
};
