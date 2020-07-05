const route = require("express").Router();

const User = require("../db/db");

route.get("/", (req, res) => {
  res.send("hi");
});

module.exports = route;
