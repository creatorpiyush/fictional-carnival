const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Home Page");
});

// * is used in get for errors in request
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/404.html");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
