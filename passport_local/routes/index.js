const route = require("express").Router();

const User = require("../db/db");

route.get("/", checkAuthenticate, (req, res) => {
  User.findById(req.session.passport.user).then((user) => {
    res.render("index", { username: user.username, email: user.email });
  });
});

function checkAuthenticate(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = route;
