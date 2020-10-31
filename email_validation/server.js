const express = require("express");

const app = express();

const mongoose = require("./model.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexroute = require("./routes/index");
const signuproute = require("./routes/signup");
const loginroute = require("./routes/login");

const { passport } = require("./routes/passport_config");

app.use(passport.initialize());

app.use("/", indexroute);
app.use("/signup", signuproute);
app.use("/login", loginroute);

const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
