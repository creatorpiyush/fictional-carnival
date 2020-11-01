const route = require("express").Router();

let userid = "";

route.get("/:id", (req, res) => {
  userid = req.params.id;
  res.redirect(`/login`);
});

module.exports = route;
