const express = require("express");
const mongoose = require("mongoose");

const authroute = require("./routes/auth_route");
const profileroute = require("./routes/profile_route");

const passportSetup = require("./config/passport_setup");
const keys = require("./config/keys");

const cookieSession = require("cookie-session");
const passport = require("passport");

const app = express();

// * view engine
app.set("view engine", "hbs");

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookie.keys],
  })
);

//  initalize passport
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.render("index");
});

// * connect to mongodb
mongoose.connect(
  keys.mongodb.dburi,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("connected to mongodb");
  }
);

app.use("/auth", authroute);
app.use("/profile", profileroute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
