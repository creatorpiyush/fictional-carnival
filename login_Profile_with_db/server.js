const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("./routes/passport_setup");

// * routes
const indexroute = require("./routes/index");
const signuproute = require("./routes/signup");
const loginroute = require("./routes/login");
const logoutroute = require("./routes/logout");
const googleoauth = require("./routes/google_auth");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * session
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: ["key1", "key2"],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "hbs");

// * requests
app.use("/", indexroute);

app.use("/login", loginroute);

app.use("/signup", signuproute);

app.use("/auth/google", googleoauth);

app.use("/logout", logoutroute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
