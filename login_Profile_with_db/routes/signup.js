const route = require("express").Router();

route.get("/", (req, res) => {
  res.send("Signup");
});

module.exports = route;
