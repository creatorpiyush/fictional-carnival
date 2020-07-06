const route = require("express").Router();
const bcrypt = require("bcryptjs");

const { check, validationResult, Result } = require("express-validator");

const User = require("../db/user");

route.get("/", (req, res) => {
  res.status(200).render("login");
});

route.post(
  "/dXNlcmxvZ2lu",
  [
    check("email").isEmail().normalizeEmail(),
    check("password").not().isEmpty().trim().escape(),
  ],
  (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty())
      return res
        .status(500)
        .render("login", {
          error: `${err.errors[0].msg} for ${err.errors[0].param} `,
        });

    User.findOne({ email: req.body.email }, (err, result) => {
      if (err) return res.status(422).render("login", { error: err });

      if (result) {
        const isMatch = bcrypt.compareSync(req.body.password, result.password);
        if (isMatch) return res.status(201).redirect("/");
        else {
          return res
            .status(421)
            .render("login", { error: `Password not matched` });
        }
      } else {
        return res.status(422).render("login", { error: `User not found` });
      }
    });
  }
);

module.exports = route;
