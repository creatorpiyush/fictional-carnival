const passport = require("passport");

// * Google Passport
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("../keys/keys");

const User = require("../db/db");

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
      console.log(profile);

      User.findOne({ googleid: profile.id }).then((currentUser) => {
        if (currentUser) {
          // * already a User
          console.log(`User is : `, currentUser);
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
            done(null, newUser);
          });
        }
      });
    }
  )
);
