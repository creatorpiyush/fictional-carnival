const route = require("express").Router();
const passport = require("passport");

route.get(
  "/",
  passport.authenticate("github", {
    scope: ["read:user", "user:email"],
  })
);

route.get(
  "/redirect",
  passport.authenticate("github", { failureRedirect: "/failed" }),
  function (req, res) {
    res.redirect("/good");
  }
);

module.exports = route;
