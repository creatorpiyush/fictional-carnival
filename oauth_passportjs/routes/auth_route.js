const route = require("express").Router();
const { check, validationResult } = require("express-validator");
const mongoose = require("mongoose");

const db_url = `mongodb://localhost:27017/oauth_db`;

module.exports = mongoose.connect(
  db_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DB connected...");
      //   console.log(info);
    }
  }
);

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

    // const username = req.body.username;
    // const email = req.body.email;

    // console.log(username + email);

    if (req.body.password != req.body.confirmpassword) {
      return res.render("signup", {
        error: `Password not matched`,
        // username: req.body.username,
        // email: req.body.email,
      });
    }
    res.render("login");
  }
);

route.get("/logout", (req, res) => {
  // handle with passport
  res.send("logging-out with google");
});

module.exports = route;
