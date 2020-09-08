const route = require("express").Router();

route.get("/", (req, res) => {
  //   res.send(req.user.emails[0].value);
  //   res.send(req.user)
  res.send(
    `Welcome mr ${req.user.username}! <br> Your email-id : ${req.user.email} `
  );
});

module.exports = route;
