const route = require("express").Router();

const bcrypt = require("bcryptjs");

const User = require("../model.js");

const { sendConfirmationEmail } = require("./confirmemail");

route.get("/", checkNotAuthenticate, (req, res) => {
  res.render("signup", { message: req.flash("message") });
});

route.post("/", checkNotAuthenticate, async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;

  if (password !== confirmpassword) {
    return res.send(`!!Password does not matches!!`);
  } else {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const temp = new User({
        username: username,
        email: email,
        password: hashedPassword,
      });

      temp.save((err, result) => {
        if (err) {
          // return res.render("User already Exists");
          req.flash("message", "User already Exists");
          res.redirect("/signup");
          return;
        } else {
          res.send(`Confirmation Mail sent to ${result.email} `);
          sendConfirmationEmail(result);
        }
      });
    } catch (error) {
      req.flash("message", error);
      res.redirect("/signup");
      return;
    }
  }
});

function checkNotAuthenticate(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

module.exports = route;
