abc(); // * function declared with "function" can be called any where before and after

function abc() {
  console.log(`content of function abc()`);
}

// ! xyz(); // error: when function is declared with "let" then it can only be called after the function declaration

let xyz = function () {
  console.log(`Content of function xyz()`);
};

xyz();

// * lambda function (=>)  -> mostly used

let a = () => {
  console.log(`content of lambda function`);
};

a();

//
console.log(`Function inside Function`);

// todo: function inside function

function alpha() {
  function beta() {
    return alpha;
  }
  return beta;
}
console.log(alpha()); // * output: beta()

console.log(alpha); // * output: alpha()

// todo: sending values to parametrized function inside a function

function x(greeting) {
  function b(name) {
    console.log(greeting, name);
  }
  return b;
}

let c = x(`hi`);
console.log(c(`Piyush`));

console.log(c); // * output: function b()

console.log(typeof c); // * output: function
