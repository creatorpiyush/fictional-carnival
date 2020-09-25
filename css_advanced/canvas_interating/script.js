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

let mouse = {
  x: undefined,
  y: undefined,
};

let colorArray = ["red", "blue", "green", "orange", "yellow"];

window.addEventListener("mousemove", (event) => {
  // console.log(event);
  mouse.x = event.x;
  mouse.y = event.y;
  // console.log(mouse);
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function Circle(x, y, dx, dy, r) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = r;
  this.minRadius = r;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    // c.strokeStyle = "#fa34a3";
    // c.stroke();
    c.fillStyle = this.color;
    c.fill();
  };
  this.update = function () {
    if (this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // inner-activity
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.r < 40) {
        this.r += 1;
      }
    } else if (this.r > 2) {
      this.r -= 1;
    }

    this.draw();
  };
}

let circleArray = [];

for (let i = 0; i < 800; i++) {
  let r = Math.random() * 3 + 1;

  let x = Math.random() * (innerWidth - r * 2) + r;
  let y = Math.random() * (innerHeight - r * 2) + r;

  let dx = (Math.random() - 0.5) * 4;
  let dy = (Math.random() - 0.5) * 4;

  circleArray.push(new Circle(x, y, dx, dy, r));
}

// console.log(circleArray);

function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
