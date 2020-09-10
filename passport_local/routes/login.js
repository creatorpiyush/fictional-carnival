const route = require("express").Router();

const { passport } = require("./passport_config");

route.get("/", (req, res) => {
  res.render("login");
});

route.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

module.exports = route;
