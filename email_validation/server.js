const express = require("express");

const mongoose = require("./model.js");

const app = express();

const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
