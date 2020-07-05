const route = require("express").Router();

const bcrypt = require("bcryptjs");

const { check, validationResult } = require("express-validator");

const User = require("../db/db");

// route.get("/", (req, res) => {
//   res.send("hi");
// });

route.post(
  "/dXNlcmxvZ2lu",
  [
    check("email").isEmail().normalizeEmail(),
    check("password").not().isEmpty().trim().escape(),
  ],
  (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(422).send("!!! Form Validation Error !!!");
    }

    // check email
    User.findOne({ email: req.body.email }, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }

      if (result) {
        // matching password
        const isMatch = bcrypt.compareSync(req.body.password, result.password);

        // check password is matched
        if (isMatch) {
          // password match
          return res.status(200).redirect("/");
        }
        // if password is incorrect
        else {
          return res.status(500).send(`!!! Password Not Matched !!!`);
        }
      } else {
        return res.status(500).send("Email not Found...");
      }
    });
  }
);

module.exports = route;
