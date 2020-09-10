const route = require("express").Router();

const bcrypt = require("bcryptjs");

const User = require("../db/db");

route.get("/", (req, res) => {
  res.render("signup");
});

route.post("/", async (req, res) => {
  try {
    const hashedpassword = await bcrypt.hash(req.body.password, 10);
    const temp = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedpassword,
    });
    temp.save((err, result) => {
      if (err) {
        return res.status(500).send("!!! User already Exist !!!");
      } else {
        res.redirect("/login");
      }
    });
  } catch (error) {
    res.redirect("/signup");
  }
});

module.exports = route;
