// * each and every variable & function is made up of object
// * Everything indirectly inherits from the same thing
// * that obj is inherited from
// * i.e. in Javascript, everything is essentially an Objec

let string = "Piyush Anand"; // 3 levels from null
let number = 24; // 3 levels from null
let boolean = true; // 3 levels from null
let array = [2, 3, 4, 5, 6]; // 3 levels from null
let obj = {}; // 2 levels from null
let fun = function () {
  console.log(`Hi!`);
};

console.log(`For object`);
console.log(obj.__proto__);
console.log(obj.__proto__.__proto__);
console.log(`For string`);
console.log(string.__proto__.__proto__);
console.log(string.__proto__.__proto__.__proto__);
console.log(`For number`);
console.log(number.__proto__.__proto__);
console.log(number.__proto__.__proto__.__proto__);

console.log(`==== .__proto__ Chain ====`);
// todo: proto chain
console.log(string.__proto__.__proto__ == obj.__proto__); //  * output: true
console.log(number.__proto__.__proto__ == obj.__proto__); //  * output: true
console.log(boolean.__proto__.__proto__ == obj.__proto__); //  * output: true
console.log(array.__proto__.__proto__ == obj.__proto__); //  * output: true
console.log(fun.__proto__.__proto__ == obj.__proto__); //  * output: true

// *
// * Using the variables whose name starts with Capital letter => they are known functions
// * String, Boolean, Number, Array, Object, FUnction

console.log("======= types =======");
console.log("typeof String", typeof String);
console.log("typeof Boolean", typeof Boolean);
console.log("typeof Number", typeof Number);
console.log("typeof Array", typeof Array);
console.log("typeof Object", typeof Object);
console.log("typeof Function", typeof Function);

console.log("======= prototypes ======= ");
console.log(obj.__proto__ == Object.prototype);
console.log(string.__proto__ == String.prototype);
console.log(number.__proto__ == Number.prototype);
console.log(boolean.__proto__ == Boolean.prototype);
console.log(array.__proto__ == Array.prototype);
console.log(fun.__proto__ == Function.prototype);

// * for all Output: object
console.log(typeof Object.prototype);
console.log(typeof String.prototype);
console.log(typeof Number.prototype);
console.log(typeof Boolean.prototype);
console.log(typeof Array.prototype);
