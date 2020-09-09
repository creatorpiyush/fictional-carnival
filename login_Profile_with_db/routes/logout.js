const route = require("express").Router();

route.get("/", (req, res) => {
  // res.send(req.session.userId)
  req.session.userId = null;
  req.logout();
  res.redirect("/login");
});

module.exports = route;
