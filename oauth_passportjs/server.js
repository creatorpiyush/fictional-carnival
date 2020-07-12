const express = require("express");

const app = express();

const loginoauth = require("./routes/auth_route");

const port = process.env.PORT || 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/user/signup/route", loginoauth);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
