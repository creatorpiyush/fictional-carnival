const express = require("express");
const app = express();
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./routes/passport_setup");

// * routes
const goodroute = require("./routes/good");
const googleoauth = require("./routes/google_route");
const githuboauth = require("./routes/github_route");
const facebookoauth = require("./routes/facebook_route");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// * cookieSession created
app.use(
  cookieSession({
    name: "passport",
    keys: ["key1", "key2"],
  })
);

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401);
  }
};

// cookieSession ends

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => res.send("not logged in"));

app.get("/failed", (req, res) => res.send("You Failed to log in!"));

app.use("/good", isLoggedIn, goodroute); // * isLoggedIn is for sending user data

// * passport oauth for google => can also be route
app.use("/auth/google", googleoauth);

app.use("/auth/github", githuboauth);

app.use("/auth/facebook", facebookoauth);


app.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
});

//* passport ends

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
