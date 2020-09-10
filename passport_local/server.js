const express = require("express");

const app = express();

// * routes
const signuproute = require("./routes/signup");
const loginroute = require("./routes/login");

app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/signup", signuproute);

app.use("/login", loginroute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
