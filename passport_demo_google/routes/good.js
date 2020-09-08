const route = require("express").Router();

route.get("/", (req, res) => {
  res.send(
    `Welcome mr ${req.user.username}! <br> Your email-id : ${req.user.email} `
  );
});

module.exports = route;
