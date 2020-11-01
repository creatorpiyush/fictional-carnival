const route = require("express").Router();

const User = require("../model.js");

route.get("/", checkAuthenticate, (req, res) => {
  User.findById(req.session.passport.user).then((user) => {
    res.send({ username: user.username, email: user.email });
  });
});

function checkAuthenticate(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = route;
