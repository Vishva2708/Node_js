const usermodal = require("../Modal/user");

const Register = async (req, res) => {
 const data= await usermodal.create(req.body);
  res.send(data)
  // res.redirect("/user");
};
const Registerdata = async (req, res) => {
  const data = await usermodal.find({});
  // res.render("home", { data });
  res.send(data)
};
const Login = async (req, res) => {
  const { username, password } = req.body;

  let data = await usermodal.findOne({ username: username });
  if (!data) {
    return res.send("userdata not found");
  }
  if (data.password != password) {
    return res.send("password not match");
  }
  res.cookie("data", data.id).send("success");
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
module.exports = { Register, Delete, Edit, Login, Registerdata, home,local};
