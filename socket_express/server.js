const express = require("express");

const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 4444;

app.use("/", express.static(__dirname + "/public"));

io.on(`connection`, (socket) => {
  console.log(`connection:`, socket.id);

  socket.on("boom", () => {
    console.log("Boom received on : ", socket.id);
  });

  setInterval(() => {
    socket.emit(`whizzz`);
  }, 2000);
});

server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
