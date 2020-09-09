const route = require("express").Router();

route.get("/", (req, res) => {
  res.send("Login");
});

module.exports = route;
