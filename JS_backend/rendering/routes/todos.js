const route = require("express").Router();

let todos = [];

route.get("/", (req, res) => {
  res.render("index", { todos });
});

route.post("/", (req, res) => {
  todos.push({
    task: req.body.todo,
  });
  res.redirect("todos");
});

module.exports = route;
