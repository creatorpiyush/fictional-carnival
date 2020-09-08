const route = require("express").Router();

route.get("/", (req, res) => {
  //   res.send(req.user.emails[0].value);
  res.send(
    `Welcome mr ${req.user.displayName}! <br> Your email-id : ${req.user.emails[0].value} `
  );
});

module.exports = route;
