const route = require("express").Router();
const bcrypt = require("bcryptjs");

const { check, validationResult } = require("express-validator");

const User = require("../db/userdb");

route.get("/", (req, res) => {
  res.status(201).render("forgetpass");
});

route.post(
  "/currentuser",
  [
    check("email").isEmail().normalizeEmail(),
    check("password").not().isEmpty().trim().escape(),
  ],
  (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(422).render("forgetpass", {
        error: `${err.errors[0].msg} for ${err.errors[0].param} `,
      });
    }

    if (req.body.email) {
      User.updateOne(
        { email: req.body.email },
        { password: bcrypt.hashSync(req.body.password, 13) },

        (err, result) => {
          if (err)
            return res.status(422).render("forgetpass", {
              error: `Incorrect Email Provided or User not Exist`,
            });
          // console.log(email);
          // else if (req.body.email != result.email) {
          //   return res.status(422).render("forgetpass", {
          //     error: `Incorrect Email Provided or User not Exist`,
          //   });
          // }
          return res
            .status(201)
            .render("login", { error: `Password Updated...` });
        }
      );
    } else {
      return res
        .status(422)
        .render("update", { error: `Valid Email not Provided` });
    }
  }
);

module.exports = route;
