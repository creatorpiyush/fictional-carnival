// * IIFE => Immediately Invoke Function Expression
// *      -> used for clean working - create local scope without polluting the global scope
// *      -> helps in minification[ Write less ]
/* 
 * before ES6 
function sayHello() {
  console.log(`Hello`);
}

sayHello(); */

// * function declared & called in same scope
(function sayHello() {
  console.log(`Hello`);
})();

// sayHello(); // ! not a variable any more in global scope
// * so function can be declared & called
(function () {
  console.log(`Hello`);
})();

(function () {
  var a = 10;
  var b = a / 5;
  console.log(a + b);
})();
// console.log(a); // ! not a variable any more in global scope

//
// * minification[ Write less ]

(function (l, p, r, s) {
  l(`3^4 = ` + p(3, 4));
  l(`4^3 = ` + p(4, 3));
  l(`root(2) = ` + r(2));
  l(`sin(10) = ` + s(10));
})(console.log, Math.pow, Math.sqrt, Math.sin);
