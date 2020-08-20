let socket = io();

socket.on("connect", () => {
  // document.getElementById("socketId").innerText = socket.id;
});

const boombtn = document.getElementById("boombtn");

boombtn.onclick = () => {
  socket.emit("boom");
};

socket.on("whizzz", () => {
  let div = document.createElement("div");
  div.innerText = `whizzz`;
  document.body.appendChild(div);
});
