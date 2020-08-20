const express = require("express");

const app = express();

const port = process.env.PORT || 4444;

app.use(express.urlencoded({ extented: true }));
app.use(express.json());

app.post("/greet", (req, res) => {
  let person = "Guest";
  if (req.body.person) {
    person = req.body.person;
  }
  res.send(`Good Morning ${person}`);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
