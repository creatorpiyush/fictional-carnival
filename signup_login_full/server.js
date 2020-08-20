const express = require("express");

const session = require("express-session");

const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const updateRoute = require("./routes/update");
const profileRoute = require("./routes/profile");

const app = express();

const port = process.env.PORT || 5555;

app.set(`view engine`, `hbs`);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: `U{]k!Zzz/3wxvJK)d$qp@>Bz#`,
  })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/YXBp/c2lnbnVw", signupRoute);

app.use("/YXBp/bG9naW4", loginRoute);

app.use("/YXBp/dXBkYXRl", updateRoute);

app.use("/YXBp/cHJvZmlsZQ==", profileRoute);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
