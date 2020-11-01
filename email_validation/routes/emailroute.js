const route = require("express").Router();

const User = require("../model.js");

let userid = "";

route.get("/", (req, res) => {
  res.render("confirmationemail", { message: req.flash("message") });
});

route.get("/:id", (req, res) => {
  userid = req.params.id;

  if (User.findById(req.params.id) === undefined) {
    req.flash("message", "Your Email is Verified !!! Please Login Here!");
    res.redirect(`/login`);
  } else {
    req.flash(
      "message",
      "Please enter the correct Email-ID or check the Verification URL again"
    );
    res.redirect("/signup");
  }
});

module.exports = route;
