const route = require("express").Router();

const bcrypt = require("bcryptjs");

const User = require("../db/db");

route.get("/", (req, res) => {
  res.send("Signup");
});

route.post("/", (req, res) => {
  const hashedpassword = bcrypt.hashSync(req.body.password, 16);

  const temp = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedpassword,
  });
  temp.save((err, result) => {
    if (err) {
      return res.status(500).send("!!! User already Exist !!!");
    } else {
      // console.log(temp.id);
      req.session.userId = temp.id;
      res.status(200).redirect("/");
    }
  });
});

module.exports = route;
