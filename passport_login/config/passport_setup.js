const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const keys = require("./keys");
const { google } = require("./keys");

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

      console.log("passport callback function fired");
      console.log(profile);
    }
  )
);
