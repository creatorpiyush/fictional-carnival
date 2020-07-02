const route = require("express").Router();

const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

const { check, validationResult } = require("express-validator");

const User = require("../models/user");

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));

route.all("/", (req, res) => {
  return res.json({
    status: true,
    message: `User controller working ...`,
  });
});

module.exports = route;
