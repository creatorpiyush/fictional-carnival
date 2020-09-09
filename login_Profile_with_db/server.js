const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("./routes/passport_setup");

// * routes
const indexroute = require("./routes/index");
const signuproute = require("./routes/signup");
const loginroute = require("./routes/login");
const googleoauth = require("./routes/google_auth");

const app = express();

// * session
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: ["key1", "key2"],
  })
);

// const isLoggedIn = (req, res, next) => {
//   if (req.user) {
//     next();
//   } else {
//     res.status(401).redirect("/login");
//   }
// };

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "hbs");

// * requests
app.use("/", indexroute);

app.use("/login", loginroute);

app.use("/signup", signuproute);

app.use("/auth/google", googleoauth);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
