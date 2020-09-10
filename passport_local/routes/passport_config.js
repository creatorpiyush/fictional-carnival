const passport = require("passport");
const bcrypt = require("bcryptjs");

const User = require("../db/db");
const keys = require("../keys/keys");

// * passport-local
const LocalStrategy = require("passport-local").Strategy;

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
          return done(null, false, {
            message: `No User with that email exists`,
          });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
          return done(null, user);
        } else {
          return done(null, false, {
            message: `No User with that email exists`,
          });
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

// *
//*

// * passport-google

const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googlepassport.clientId,
      clientSecret: keys.googlepassport.clientSecret,
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log(profile);

      User.findOne({ googleid: profile.id }).then((currentUser) => {
        if (currentUser) {
          // * already a User
          // console.log(`User is : `, currentUser);
          done(null, currentUser);
        } else {
          // * create new User
          const temp = new User({
            username: profile.displayName,
            googleid: profile.id,
            email: profile.emails[0].value,
          });
          temp.save((err, result) => {
            if (err) {
              return done(`!!! Account already exists try normal login !!!`);
            }
            done(null, result);
          });
        }
      });
    }
  )
);

module.exports = { passport };
