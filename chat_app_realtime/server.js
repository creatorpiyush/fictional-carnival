const express = require("express");

const http = require("http");
const socketio = require("socket.io");

const app = express();

const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 4444;

app.use("/", express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log(`Socket id:`, socket.id);

  socket.on("msg_send", (data) => {
    // console.log("Message Received : ", data.msg);
    socket.broadcast.emit("msg_rcvd", data);
  });
});

server.listen(port, () => {
  console.log(`Connection started at http://localhost:${port}`);
});
