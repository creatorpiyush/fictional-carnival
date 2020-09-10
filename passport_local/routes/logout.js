const route = require("express").Router();

route.delete("/", (req, res) => {
  req.logOut();
  res.redirect("/login");
});

module.exports = route;
