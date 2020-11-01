const express = require("express");
const session = require("express-session");
const method = require("method-override");
const flash = require("express-flash");

const app = express();

const mongoose = require("./model.js");

const indexroute = require("./routes/index");
const signuproute = require("./routes/signup");
const loginroute = require("./routes/login");
const logoutroute = require("./routes/logout");
const emailroute = require("./routes/emailroute");
const { passport } = require("./routes/passport_config");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(method("_method"));

app.set("view engine", "hbs");

app.use(
  session({
    secret: [`Key1`, `Key2`],
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexroute);
app.use("/signup", signuproute);
app.use("/login", loginroute);
app.use("/logout", logoutroute);
app.use("/confirmation", emailroute);

const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
