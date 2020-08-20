let lib = require("./lib"); // * used to import from another directory

console.log(lib); // output: returns the whole content

let { awesome, year, greet } = require("./lib");

console.log(awesome()); // output: returns the content of function

console.log(year());

console.log(greet(`Piyush`));
