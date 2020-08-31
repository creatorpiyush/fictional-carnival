const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const keys = require("./keys");
const { google } = require("./keys");

const User = require("../models/user_models");

passport.use(
  new GoogleStrategy(
    {
      // todo: options for strategy
      callbackURL: "/auth/google/redirect",
      clientID: google.clientID,
      clientSecret: google.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      // * passport callback function
      //   console.log("passport callback function fired");
      console.log(profile);
      //   console.log(profile.emails);

      //   console.log(profile.id);

      //   todo: check if user already exists
      User.findOne({ googleid: profile.id }).then((currentUser) => {
        if (currentUser) {
          //! already have user
          console.log("User is:", currentUser);
        } else {
          // * create user in db
          new User({
            username: profile.displayName,
            googleid: profile.id,
          })
            .save()
            .then((newUser) => {
              console.log("new user created" + newUser);
            });
        }
      });
    }
  )
);
