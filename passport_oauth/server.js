const express = require("express");

const app = express();

const port = process.env.PORT || 4444;

const signuproute = require("./routes/signup");
const loginroute = require("./routes/login");

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.use(`/login`, loginroute);

app.use(`/signup`, signuproute);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
