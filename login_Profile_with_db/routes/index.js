const route = require("express").Router();

const User = require("../db/db");

route.get("/", (req, res) => {
  // console.log(req.session);
  // res.send(req.session);
  if (req.session.passport == undefined || req.session.passport.user == null) {
    return res.redirect("/login");
  }

  User.findById(req.session.userId || req.session.passport.user).then(
    (user) => {
      res.render("index", { username: user.username, email: user.email });
    }
  );
});

module.exports = route;
