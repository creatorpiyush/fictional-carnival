const route = require("express").Router();

const User = require("../db/user");

route.get("/", (req, res) => {
  if (!req.session.userId) {
    return res.render(`login`);
  }

  const user = User.findById(req.session.userId);
  res.status(200).render("profile", { user });
});

// todo: apply session in connection

module.exports = route;
