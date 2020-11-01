const route = require("express").Router();

let userid = "";

route.get("/:id", (req, res) => {
  userid = req.params.id;
  res.send(userid);
});



module.exports = route;
