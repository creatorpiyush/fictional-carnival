const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../db/db");

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      //   return console.log(email);
      // console.log(req.body.email);
      try {
        const user = await User.findOne({ email });
        //   console.log(user);
        if (!user) {
          return done(null, false);
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        done(err);
      }
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    if (err) {
      return done(err);
    }
    done(null, user);
  });
});

module.exports = { passport };
