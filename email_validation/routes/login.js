const route = require("express").Router();

const flash = require("express-flash");
const { passport } = require("./passport_config");

route.get("/", checkNotAuthenticate, (req, res) => {
  res.render("login", { message: req.flash("message") });
});

route.post(
  "/",
  checkNotAuthenticate,
  passport.authenticate("local", {
    successRedirect: "/",
    successFlash: true,
    failureRedirect: "/login",
    failureFlash: true,
  })
);

function checkNotAuthenticate(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

module.exports = route;
