/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
const functions = require("firebase-functions");
const express = require("express");
const engine = require("consolidate");
const todoRoute = require("./routes/todos");

const cors = require("cors");

const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("hbs", engine.handlebars);
app.set("views", __dirname + "/views");
app.set("view engine", "hbs"); // * rendering

// app.get("/", todoRoute);

const todos = [];

app.get("/", (req, res) => {
  res.render("index", { todos });
});

app.post("/todo", (req, res) => {
  todos.push({
    task: req.body.todo,
  });
  res.redirect("/");
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
