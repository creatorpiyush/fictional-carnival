const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hi");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server stared at http://localhost:${port}`);
});
