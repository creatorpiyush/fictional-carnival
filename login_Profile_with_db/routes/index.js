const route = require("express").Router();

route.get("/", (req, res) => {
  // return console.log(req.session);
  // res.send(req.session);
  if (req.session.passport == null) {
    res.redirect("/login");
  } else {
    res.send(req.session.passport.user);
  }
});

module.exports = route;
