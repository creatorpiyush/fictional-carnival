const route = require("express").Router();
const { check, validationResult } = require("express-validator");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("../db");

// auth
route.get("/", (req, res) => {
  res.render("signup");
});

route.post(
  "/signup",
  [
    check("email").isEmail().normalizeEmail(),
    check("username").not().isEmpty().trim().escape(),
    check("password").not().isEmpty().trim().escape(),
    check("confirmpassword").not().isEmpty().trim().escape(),
  ],
  (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.render("signup", {
        error: `${err.errors[0].msg} for ${err.errors[0].param}`,
      });
    }
    if (req.body.password != req.body.confirmpassword) {
      return res.render("signup", {
        error: `Password not matched`,
        username: req.body.username,
        email: req.body.email,
      });
    }

    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    const temp = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    temp.save((err, result) => {
      if (err) {
        return res.status(500).render("signup", { error: err });
      }
      return res.status(200).render("login");
    });

    // res.render("login");
  }
);

route.get("/logout", (req, res) => {
  // handle with passport
  res.send("logging-out with google");
});

module.exports = route;
