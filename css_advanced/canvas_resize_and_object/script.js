const canvas = document.querySelector("canvas");

// ? adding height and width through js
// * canvas has some margin by default so we need remove that through css
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");
// console.log(c);

// ? fillRect create rectangle on screen
// c.fillRect(x, y, width, height);
// c.fillStyle = "red";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "blue";
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "green";
// c.fillRect(300, 300, 100, 100);

// ? Lines
// c.beginPath();
// // c.moveTo(x, y);
// c.moveTo(50, 300);
// // c.lineTo(x,y)
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "blue";
// c.stroke();

// ? Arc / Circle

// c.arc(x, y, r, startAngle, endAngle, drawCounterClockwise(boolean));
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// for (let i = 0; i < 100; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = "#fa34a3";
//   c.stroke();
// }

// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "#fa34a3";
// c.stroke();

let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let r = 30;

let dx = (Math.random() - 0.5) * 4;
let dy = (Math.random() - 0.5) * 4;

function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);

  c.beginPath();
  c.arc(x, y, r, 0, Math.PI * 2, false);
  c.strokeStyle = "#fa34a3";
  c.stroke();

  if (x + r > innerWidth || x - r < 0) {
    dx = -dx;
  }

  if (y + r > innerHeight || y - r < 0) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

animate();
