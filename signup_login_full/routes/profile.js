const route = require("express").Router();

const User = route.get("/", (req, res) => {
  res.status(200).render("profile", { user });
});

// todo: apply session in connection
