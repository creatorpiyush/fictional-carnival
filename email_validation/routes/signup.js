const route = require("express").Router();

const bcrypt = require("bcryptjs");

const User = require("../model.js");

route.get("/", (req, res) => {
  res.send("signup");
});

route.post("/", async (req, res) => {
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
          return res.send("User already Exists");
        }
        return res.redirect("/");
      });
    } catch (error) {
      return res.send(err);
    }
  }
});

module.exports = route;
