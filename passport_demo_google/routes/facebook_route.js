const route = require("express").Router();
const passport = require("passport");

route.get(
  "/",
  passport.authenticate("facebook", {
    scope: ["id", "email"],
  })
);

route.get(
  "/callback",
  passport.authenticate("facebook", { failureRedirect: "/failed" }),
  function (req, res) {
    res.redirect("/good");
  }
);

module.exports = route;
