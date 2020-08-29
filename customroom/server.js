const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const { v4: uuidV4 } = require("uuid");

const port = process.env.PORT || 5555;

let ids = [];

app.get("/", (req, res) => {
  id = uuidV4();
  ids = ids.concat(`${id}`);
  res.redirect(`/${id}`);
});

app.get("/:roomurl", (req, res) => {
  res.send(`${req.params.roomurl}`);
});

console.log(ids);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
