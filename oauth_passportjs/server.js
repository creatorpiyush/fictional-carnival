const express = require("express");
const session = require(`express-session`);

const User = require(`./db/userdb`);

const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const profileRoute = require("./routes/profile");
const updateRoute = require("./routes/forgetpass");

const app = express();

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: `^Sz[a4r76L{&SAS]/u%j8uDKcn`,
  })
);

port = process.env.PORT || 4444;

app.set("view engine", `hbs`);
app.set("views", `./src/views`);

app.use(express.static(__dirname + "/src"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  if (!req.session.userId) {
    return res.render(`login`);
  }
  res.render("index");
});

app.use("/api/route/signup", signupRoute);

app.use("/api/route/login", loginRoute);

app.use("/api/route/forgetpassword", updateRoute);

app.use("/api/route/main", (req, res) => {
  if (!req.session.userId) {
    return res.render(`login`);
  } else {
    User.findOne(req.session.userId, (err, result) => {
      const user = req.session;
      res.status(201).render(".", { user });
    });
  }
});

app.use("/api/route/profile", profileRoute);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
