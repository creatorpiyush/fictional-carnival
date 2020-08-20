const route = require("express").Router();
const bcrypt = require("bcryptjs");
const session = require("express-session");

const { check, validationResult, Result } = require("express-validator");

const User = require("../db/userdb");

route.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: `^Sz[a4r76L{&SAS]/u%j8uDKcn`,
  })
);

route.get("/", (req, res) => {
  res.status(200).render("login");
});

route.post(
  "/currentuserlogin",
  [
    check("email").isEmail().normalizeEmail(),
    check("password").not().isEmpty().trim().escape(),
  ],
  (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      if (err.errors[0].param == "email") {
        return res
          .status(422)
          .render("login", { emailerror: `Invalid Email-Id !!!` });
      }
      if (err.errors[0].param == "password") {
        return res
          .status(422)
          .render("login", { passworderror: `Invalid Password !!!` });
      }
    }

    // * user checking
    User.findOne({ email: req.body.email }, (err, result) => {
      if (err) return res.status(422).render("login", { error: err });

      if (result) {
        const isMatch = bcrypt.compareSync(req.body.password, result.password);
        if (isMatch) {
          // user session
          req.session.userId = result.id;
          req.session.email = result.email;
          req.session.username = result.username;
          req.session.createdon = result.createdon;
          console.log(req.session.userId);

          return res.status(200).redirect("/api/route/main");
        } else {
          return res
            .status(421)
            .render("login", { passworderror: `Password not matched !!!` });
        }
      } else {
        return res.status(422).render("login", {
          usernotfounderror: `User not found !!! `,
        });
      }
    });
  }
);

module.exports = route;
