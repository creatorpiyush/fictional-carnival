const route = require("express").Router();

// auth login
route.get("/", (req, res) => {
  res.render("login");
});

route.get("/google", (req, res) => {
  // handle with passport
  res.send("logging-in with google");
});

route.get("/logout", (req, res) => {
  // handle with passport
  res.send("logging-out with google");
});

module.exports = route;
