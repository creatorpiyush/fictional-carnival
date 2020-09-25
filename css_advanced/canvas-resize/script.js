const canvas = document.querySelector("canvas");

// ? adding height and width through js
// * canvas has some margin by default so we need remove that through css
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");
// console.log(c);

// ? fillRect create rectangle on screen
// c.fillRect(x, y, width, height);
c.fillRect(100, 100, 100, 100);
c.fillRect(400, 100, 100, 100);
c.fillRect(300, 300, 100, 100);
