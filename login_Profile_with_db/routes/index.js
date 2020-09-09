const route = require("express").Router();

route.get("/", (req, res) => {
  res.send("hi");
});

module.exports = route;
