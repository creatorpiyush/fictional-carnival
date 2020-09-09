const route = require("express").Router();

route.get("/", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/login");
});

module.exports = route;
