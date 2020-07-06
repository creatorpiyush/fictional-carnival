const express = require("express");

const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");

const app = express();

const port = process.env.PORT || 4444;

app.set(`view engine`, `hbs`);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/YXBp/c2lnbnVw", signupRoute);

app.use("/YXBp/bG9naW4", loginRoute);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
