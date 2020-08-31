const express = require("express");

const app = express();

const authroute = require("./routes/auth_route");

// * view engine
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/auth", authroute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
