const socket = io();

const btnSend = document.getElementById("btnSend");
const inpMsg = document.getElementById("inpMsg");
const ulMsgList = document.getElementById("ulMsgList");

btnSend.onclick = () => {
  socket.emit(`msg_send`, {
    msg: inpMsg.value,
  });
  inpMsg.value;
};

socket.on("msg_rcvd", (data) => {
  let liNewMsg = document.createElement("li");
  liNewMsg.innerText = data.msg;
  ulMsgList.appendChild(liNewMsg);
});
