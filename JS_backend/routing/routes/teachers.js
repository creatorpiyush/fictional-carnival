/* 
const express = require("express");
const Router = express();
const route = Router(); 
*/

const { Router } = require("express");

// OR

const route = require("express").Router();

let teachers = [
  { name: "Piyush", subject: "Web" },
  { name: "Anand", subject: "CP" },
  { name: "XYZ", subject: "Android" },
  { name: "PQR", subject: "DP" },
];

route.get("/", (req, res) => {
  res.send(teachers);
});

route.get("/add", (req, res) => {
  teachers.push({
    name: req.query.name,
    subject: req.query.subject,
  });
  res.redirect(".");
});

route.get("/:id", (req, res) => {
  res.send(teachers[req.params.id]);
});

module.exports = route;
