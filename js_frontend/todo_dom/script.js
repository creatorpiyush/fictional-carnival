let task = document.getElementById("task");
let addbtn = document.getElementById("addbtn");
let list = document.getElementById("list");

addbtn.onclick = function () {
  let li = document.createElement("li");
  li.innerText = task.value;

  let Xbtn = document.createElement("button");
  Xbtn.innerText = "❌";
  Xbtn.onclick = (event) => {
    event.target.parentElement.remove();
  };
  li.appendChild(Xbtn);
  list.appendChild(li);
};
