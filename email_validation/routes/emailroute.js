const route = require("express").Router();

let userid = "";

route.get("/", (req, res) => {
  res.render("confirmationemail", { message: req.flash("message") });
});

route.get("/:id", (req, res) => {
  userid = req.params.id;
  res.redirect(`/login`);
});

module.exports = route;
