const express = require("express");
const {
  Register,
  Login,
  Registerdata,
  home,
  local,
  password,
} = require("../Controller/Usercontroller");
const isAuth = require("../middleware/Auth");
const passport = require("passport");
const U_router = express.Router();
U_router.post("/register", Register);
U_router.get("/", Registerdata);
U_router.get("/index", isAuth, home);
// U_router.post("/local",passport.authenticate("local",local))
U_router.post(
  "/local",
  passport.authenticate("local", { failureRedirect: "/fail" }),
  local
);
/* Login */
U_router.post("/login", Login);
U_router.get("/login", (req, res) => {
  res.render("login");
});

/* Forget password */
U_router.post("/forget", password);
U_router.get("/forget", (req, res) => {
  res.render("forget");
});

// U_router.delete("/:id",Delete)
// U_router.put("/:id",Edit)
module.exports = U_router;
