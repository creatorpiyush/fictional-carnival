const express = require("express");

const http = require("http");
const socketio = require("socket.io");

const app = express();

const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 4444;

app.use("/", express.static(__dirname + "/public"));

let users = {
  piyush: "piyush@99",
};

let socketMap = {};

io.on("connection", (socket) => {
  console.log(`Socket id:`, socket.id);

  const login = (s, u) => {
    s.join(u);
    s.emit("logged_in");
  };

  socket.on("login", (data) => {
    if (users[data.username]) {
      if (users[data.username] == data.password) {
        // socket.join(data.username);
        // socket.emit("logged_in", data);

        login(socket, data.username);
      } else {
        socket.emit(`login_failed`);
      }
    } else {
      users[data.username] = data.password;
      // socket.join(data.username);
      // socket.emit("logged_in", data);

      login(socket, data.username);
    }
    console.log(users);
  });

  socket.on("msg_send", (data) => {
    if (data.to) {
      io.to(data.to).emit("msg_rcvd", data);
    } else {
      socket.broadcast.emit("msg_rcvd", data);
    }
  });

  // socket.on("msg_send", (data) => {
  //   // console.log("Message Received : ", data.msg);
  //   socket.broadcast.emit("msg_rcvd", data);
  // });
});

server.listen(port, () => {
  console.log(`Connection started at http://localhost:${port}`);
});
