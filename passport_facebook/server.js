const express = require("express");
const passport = require("passport");
const { Strategy } = require("passport-facebook");

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

passport.use(
  new Strategy(
    {
      clientID: `1369267293276752`,
      clientSecret: `c269e7ae62a0b1021201f5c53131dff1`,
      callbackURL: `http://localhost:${port}/fb/auth`,
      profileFields: ["id", "displayName"],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken, refreshToken, profile);
      const user = {};
      done(null, user);
    }
  )
);

app.use("/login/fb", passport.authenticate("facebook"));

app.use("/failed/login", (req, res) => {
  res.send("login not complete");
});

app.get(
  "/fb/auth",
  passport.authenticate(
    "facebook",
    { failureRedirect: "/failed/login" },
    (req, res) => {
      console.log(req.user);
        res.redirect("/");
    }
  )
);

app.use("/logout", (req, res) => {
  req.logout();
  console.log(req.isAuthenticated());
  res.send("logged out");
});
