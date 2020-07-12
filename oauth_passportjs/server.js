const express = require("express");

const app = express();

const loginoauth = require("./routes/auth_route");

const port = process.env.PORT || 4444;

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/user/login/route", loginoauth);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
