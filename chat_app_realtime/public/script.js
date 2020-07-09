const socket = io();

$("#loginBox").show();
$("#chatBox").hide();

$("#btnStart").click(() => {
  socket.emit("login", {
    username: $("#inpUsername").val(),
    password: $("#inpPass").val(),
  });
});

socket.on("logged_in", (data) => {
  $("#loginBox").hide();
  $("#chatBox").show();
});

socket.on(`login_failed`, () => {
  window.alert(`Username or Password Incorrect`);
});

$("#btnSendMsg").click(() => {
  socket.emit("msg_send", {
    to: $("#inpToUser").val(),
    msg: $("#inpNewMsg").val(),
  });
});

socket.on("msg_rcvd", (data) => {
  $("#ulMsgList").append($(`<li>`).text(data.msg));
});

// const btnSend = document.getElementById("btnSend");
// const inpNewMsg = document.getElementById("inpMsg");
// const ulMsgList = document.getElementById("ulMsgList");

// btnSend.onclick = () => {
//   socket.emit(`msg_send`, {
//     msg: inpMsg.value,
//   });
//   inpMsg.value;
// };

// socket.on("msg_rcvd", (data) => {
//   let liNewMsg = document.createElement("li");
//   liNewMsg.innerText = data.msg;
//   ulMsgList.appendChild(liNewMsg);
// });
