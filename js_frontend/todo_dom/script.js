let task = document.getElementById("task");
let addbtn = document.getElementById("addbtn");
let list = document.getElementById("list");

addbtn.onclick = function () {
  let li = document.createElement("li");
  li.innerText = task.value;

  // * delete button
  let Xbtn = document.createElement("button");
  Xbtn.innerText = "❌";
  Xbtn.onclick = (event) => {
    event.target.parentElement.remove();
  };

  // * order shift
  let Upbtn = document.createElement("button");
  Upbtn.innerText = "⬆";
  Upbtn.onclick = (event) => {
    event.target.parentElement.parentElement.insertBefore(
      event.target.parentElement,
      event.target.parentElement.previousSibling
    );
  };

  li.appendChild(Xbtn);
  li.appendChild(Upbtn);
  list.appendChild(li);
};
