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

module.exports = route;
