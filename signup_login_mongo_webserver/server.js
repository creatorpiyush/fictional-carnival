const express = require("express");
const bcrypt = require("bcryptjs");

const app = express();

// const User = require("./db/db");

const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");

const port = process.env.PORT || 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static(__dirname + "/public"));

app.use("/dXNlcg==/c2lnbnVw", signupRoute);

app.use("/dXNlcg==/bG9naW4=", loginRoute);

app.listen(port, () => {
  console.log(`Server startedd at http://localhost:${port}`);
});
