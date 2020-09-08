const route = require("express").Router();
const passport = require("passport");
const cookieSession = require("cookie-session");
const keys = require("../config/keys");

route.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookie.keys],
  })
);

route.use(passport.initialize());
route.use(passport.session());

// const user

route.get("/", (req, res) => {
  res.send(req.user);
});

module.exports = route;
