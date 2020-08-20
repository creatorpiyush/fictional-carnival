const express = require("express");

const app = express();

const port = process.env.PORT || 4444;

app.use("/", express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
