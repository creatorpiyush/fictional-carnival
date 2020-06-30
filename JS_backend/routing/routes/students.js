const route = require("express").Router();

let students = [
  { name: "Piyush" },
  { name: "Anand" },
  { name: "XYZ" },
  { name: "PQR" },
];

route.get("/", (req, res) => {
  res.send(students);
});

route.get("/add", (req, res) => {
  students.push({
    name: req.query.name,
  });
  res.redirect(".");
});

route.get("/:id", (req, res) => {
  res.send(students[req.params.id]);
});

module.exports = route;
