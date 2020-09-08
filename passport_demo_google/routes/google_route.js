const route = require("express").Router();
const passport = require("passport");

route.get(
  "/",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

route.get(
  "/redirect",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    res.redirect("/good");
  }
);

module.exports = route;
