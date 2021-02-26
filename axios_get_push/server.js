const express = require("express");
const app = express();

const axios = require("axios").default;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      for (const todo of response.data) {
        console.log((todo.completed ? "✔" : "❌") + "\t" + todo.title);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/", async (req, res) => {
  await axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: req.body.title,
      completed: req.body.completed,
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.put("/", async (req, res) => {
  await axios
    .put(`https://jsonplaceholder.typicode.com/todos/${req.body.id}`, {
      title: req.body.title,
      completed: req.body.completed,
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.delete("/", async (req, res) => {
  await axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${req.body.id}`, {
      title: req.body.title,
      completed: req.body.completed,
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
