const route = require("express").Router();

const User = require("../db/db");

route.get("/", (req, res) => {
  res.render("login", { title: `Login` });
});

route.post("/", (req, res) => {
  User.findOne(
    { email: req.body.email }.then((currentUser) => {
      if (!currentUser) {
        return res.status(404).render("login", { error: req.body.email });
      }

      if (User.password !== req.body.password) {
        return res.status(404).render("login", { error: "Incorrect Password" });
      }

      req.session.userId = User.id;
      res.redirect("/");
    })
  );
});

module.exports = route;
