const route = require("express").Router();

route.get("/login", (req, res) => {
  res.render("login");
});

route.get("/logout", (req, res) => {
  // todo: handle with passport
  res.send("logging out");
});

route.get("/google", (req, res) => {
  // todo: handle with passport
  res.send("logging in with google");
});

module.exports = route;
