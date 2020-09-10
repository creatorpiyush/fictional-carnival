const route = require("express").Router();

const bcrypt = require("bcryptjs");

const User = require("../db/db");

route.get("/", (req, res) => {
  res.render("login");
});

route.post("/", (req, res) => {
  User.findOne({email})
});

module.exports = route;
