const route = require("express").Router();
const bcrypt = require("bcryptjs");
const session = require("express-session");

const { check, validationResult } = require("express-validator");

const User = require("../db/user");

route.get("/", (req, res) => {
  res.status(200).render("login");
});

route.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: `U{]k!Zzz/3wxvJK)d$qp@>Bz#`,
  })
);

route.post(
  "/dXNlcmxvZ2lu",
  [
    check("email").isEmail().normalizeEmail(),
    check("password").not().isEmpty().trim().escape(),
  ],
  (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty())
      return res.status(500).render("login", {
        error: `${err.errors[0].msg} for ${err.errors[0].param} `,
      });

    // * comparing password
    User.findOne({ email: req.body.email }, (err, result) => {
      if (err) return res.status(422).render("login", { error: err });

      if (result) {
        const isMatch = bcrypt.compareSync(req.body.password, result.password);
        if (isMatch) {
          // session connected to user
          req.session.userId = result.id;
          req.session.email = result.email;
          req.session.username = result.username;
          req.session.createdOn = result.createdOn;
          console.log(req.session.userId);

          return res.status(201).redirect("/YXBp/cHJvZmlsZQ==");
        } else {
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
