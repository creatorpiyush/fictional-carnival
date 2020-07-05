const route = require("express").Router();
const bcrypt = require("bcryptjs");

const { check, validationResult } = require("express-validator");

const User = require("../db/db");

// route.get("/", (req, res) => {
//   res.send("hi");
// });

route.post(
  "/YWRkdXNlcg==",
  [
    check("username").not().isEmpty().trim().escape(),
    check("password").not().isEmpty().trim().escape(),
    check("email").isEmail().normalizeEmail(),
  ],
  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.send("!!! Form Validation Error !!!");
    }

    const hashedPassword = bcrypt.hashSync(req.body.password, 13);

    const temp = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    temp.save((err, result) => {
      if (err) {
        return res.status(500).send("!!! Value insert Fail !!!");
      }
      return res.status(200).send("Value Inserted ...");
    });
  }
);

module.exports = route;
