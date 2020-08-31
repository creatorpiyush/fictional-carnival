const route = require("express").Router();

route.get("/", (req, res) => {
  res.render("signup");
});

route.post("/", (req, res) => {
    
});

module.exports = route;
