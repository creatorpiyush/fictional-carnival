/*
 * document => refers to full html page
 * document.body => refers to html body
 * document.createElement(rag_name) => used to create html content
 */

let one = document.getElementById("one");
one.innerText = "HI";
console.log(one.innerText);

// todo: appending in a list and use of button
let ul = document.getElementById("ul");

document.getElementById("btn").onclick = function () {
  let list = document.createElement("li");

  list.innerText = "HI Button Clicked";
  ul.appendChild(list);

  console.log(`Button Clicked`);
};

// * changing through text content
let two = document.getElementById("two");
two.textContent = `hi`;

// todo: creating elements => and adding values
let list = document.getElementById("list");

document.getElementById("printbtn").onclick = () => {
  let N = document.getElementById("number").value;

  for (let i = 1; i <= N; i++) {
    let item = document.createElement("li");
    item.innerText = i;
    list.appendChild(item);
  }
};
