const express = require("express");

const app = express();

const { user } = require("./db/db");

const port = process.env.PORT || 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static(__dirname + "/public"));

app.get("/signup");

app.listen(port, () => {
  console.log(`Server startedd at http://loccalhost:${port}`);
});
