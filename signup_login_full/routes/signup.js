const route = require("express").Router();
const bcrypt = require("bcryptjs");

const { check, validationResult } = require("express-validator");

const User = require("../db/user");

route.get("/", (req, res) => {
  res.render("signup");
});

route.post(
  "/bmV3dXNlcg==",
  [
    check(`username`).not().isEmpty().trim().escape(),
    check("password").not().isEmpty().trim().escape(),
    check("email").isEmail().normalizeEmail(),
  ],
  (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty())
      return res.status(422).render("signup", {
        error: `${err.errors[0].msg} for ${err.errors[0].param} `,
      });

    const hashedPassword = bcrypt.hashSync(req.body.password, 13);

    const temp = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    temp.save((err, result) => {
      if (err)
        return res
          .status(422)
          .render("signup", { error: `user or username already exists` });

      return res.status(200).redirect("/YXBp/bG9naW4");
    });
  }
);

module.exports = route;
