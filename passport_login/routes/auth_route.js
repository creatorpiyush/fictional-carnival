const route = require("express").Router();
const passport = require("passport");

route.get("/login", (req, res) => {
  res.render("login");
});

route.get("/logout", (req, res) => {
  // todo: handle with passport
  res.send("logging out");
});

route.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

// * callback router for google to redirect to
route.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.send("You reached the callback uri");
});

module.exports = route;
