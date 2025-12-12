const passport = require("passport");
const usermodal = require("../Modal/user");

const LocalStrategy = require("passport-local").Strategy;
const LocalAuth = (passport) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      const user = await usermodal.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "username not found" });
      }
      if (user.password != password) {
        return done(null, false, { message: "password not found" });
      }

      return done(null, user);
    })
  );
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function (id, done) {
  usermodal.findById(id, function (err, user) {
    done(err, user);
  });
});

};
module.exports = LocalAuth;
