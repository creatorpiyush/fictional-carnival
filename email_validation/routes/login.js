const route = require("express").Router();

const { passport } = require("./passport_config");

route.get(
  "/",
  checkNotAuthenticate,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

function checkNotAuthenticate(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

module.exports = route;
