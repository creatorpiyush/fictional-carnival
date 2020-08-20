const route = require("express").Router();
const bcrypt = require("bcryptjs");
const session = require("express-session");
const { check, validationResult } = require("express-validator");

const User = require("../db/userdb");

route.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: `^Sz[a4r76L{&SAS]/u%j8uDKcn`,
  })
);

route.get("/", (req, res) => {
  res.status(200).render("signup");
});

route.post(
  "/newuser",
  [
    check("username").not().isEmpty().trim().escape(),
    check("password").not().isEmpty().escape(),
    check("email").isEmail().normalizeEmail(),
  ],
  (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      if (err.errors[0].param == "username") {
        return res
          .status(422)
          .render("signup", { usernameerror: `Username is Required !!!` });
      }
      if (err.errors[0].param == "email") {
        return res
          .status(422)
          .render("signup", { emailiderror: `Email-Id is Required !!!` });
      }
      if (err.errors[0].param == "password") {
        return res.status(422).render("signup", {
          passworderror: `Password is Required !!!`,
        });
        // } else {
        //   return res.status(422).render("signup", {
        //     passworderror: `Invalid Password !!!`,
        //   });
        // }
      }
    }

    const hashedPassword = bcrypt.hashSync(req.body.password, 16);

    const temp = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    temp.save((err, result) => {
      if (err) {
        if (Object.keys(err.keyValue)[0] == "username") {
          return res
            .status(422)
            .render(`signup`, { usernameerror: `This Username is Taken !!!` });
        }
        if (Object.keys(err.keyValue)[0] == "email") {
          return res
            .status(422)
            .render(`signup`, { emailiderror: `Email-ID Already Exists !!!` });
        }
      }

      req.session.userId = result.id;
      req.session.email = result.email;
      req.session.username = result.username;
      req.session.createdon = result.createdon;
      console.log(req.session.userId);

      return res.status(200).redirect("/api/route/main");
    });
  }
);

module.exports = route;
