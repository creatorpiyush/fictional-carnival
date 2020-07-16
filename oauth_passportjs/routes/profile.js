const route = require("express").Router();

const User = require("../db/userdb");
const session = require("express-session");

route.get("/", (req, res) => {
  if (!req.session.userId) {
    return res.render(`login`);
  }

  User.findOne(req.session.userId, (err, result) => {
    const user = req.session;
    res.status(200).render("profile", { user });
  });
});

module.exports = route;
