const express = require("express");

const app = express();

const mongoose = require("./model.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexroute = require("./routes/index");
const signuproute = require("./routes/signup");

app.use("/", indexroute);
app.use("/signup", signuproute);

const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
