const route = require("express").Router();

const User = require("../db/db");

route.get("/", (req, res) => {
  // return console.log(req.session);
  // res.send(req.session);
  if (req.session.passport == null) {
    res.redirect("/login");
  } else {
    User.findById(req.session.passport.user).then((user) => {
      res.render("index", { username: user.username, email: user.email });
    });
  }
});

module.exports = route;
