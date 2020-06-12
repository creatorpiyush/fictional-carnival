let num = 20;
let float = 20.4444; // * this is also a number in js not float (nothing like double float and int)

console.log(num + ` is a type of ` + typeof num);
console.log(float + ` is a type of ` + typeof float);

// !

let char = "a"; // * this is also a string (nothing like char)
let str = "ABCDEF";

console.log(char + ` is a type of ` + typeof char);
console.log(str + ` is a type of ` + typeof str);

// !

let t = true;
let f = false;

console.log(t + ` is a type of ` + typeof t);
console.log(f + ` is a type of ` + typeof f);

// !

let Null = null; // * object

console.log(Null + ` is a type of ` + typeof Null);

// !

let undef = undefined;

console.log(undef + ` is a type of ` + typeof undef);

// todo: Dynamic Properties of Variable

console.log("Dynamic Properties of Variable");

let x;
x = 10;
console.log(x);

x = `ABCD`;
console.log(x);

x = true;
console.log(x);

console.log(1 / "a"); // * NaN => Not a Number
