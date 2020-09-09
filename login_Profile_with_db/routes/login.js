const route = require("express").Router();

const bcrypt = require("bcryptjs");

const User = require("../db/db");

route.get("/", (req, res) => {
  res.render("login", { title: `Login` });
});

route.post("/", (req, res) => {
  User.findOne({ email: req.body.email }).then((currentUser) => {
    if (!currentUser) {
      return res.status(404).render("login", { error: req.body.email });
    }

    const ismatch = bcrypt.compareSync(req.body.password, currentUser.password);

    // console.log(ismatch);
    if (!ismatch) {
      return res.status(404).render("login", { error: "Incorrect Password" });
    }

    req.session.userId = currentUser.id;
    // console.log(req.session.userId);
    return res.redirect("/");
  });
});

module.exports = route;
