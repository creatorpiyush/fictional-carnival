const express = require("express");

const app = express();

const flash = require("express-flash");
const session = require("express-session");

// * routes
const indexroute = require("./routes/index");
const signuproute = require("./routes/signup");
const loginroute = require("./routes/login");
const { passport } = require("./routes/passport_config");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "hbs");

app.use(flash());
app.use(
  session({
    secret: [`key1`, `key2`],
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexroute);

app.use("/signup", signuproute);

app.use("/login", loginroute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
