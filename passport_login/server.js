const express = require("express");
const mongoose = require("mongoose");

const passportSetup = require("./config/passport_setup");
const keys = require("./config/keys");

const app = express();

const authroute = require("./routes/auth_route");

// * view engine
app.set("view engine", "hbs");

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

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
