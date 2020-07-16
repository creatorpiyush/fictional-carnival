let str = `Piyush Anand`;
console.log(str);

let name = `Piyush`;
let intro = `Hi ${name}`;
console.log(intro);

// * long string

let longstring = "This is a very" + " long string" + " i am using";
console.log(longstring);

let longstr = "This is a \
 long string";
console.log(longstr);

console.log(str.charAt(5));

console.log(str.substr(3));
console.log(str.substr(3, 5)); // * substr used for 3rd index to 5 more char

console.log(str.substring(3));
console.log(str.substring(3, 5)); // * str.substring(start_index , End_index)

console.log(str.slice(-5, -3));

console.log(str.split("a")); // * a is removed and the connection is seprated in array-form
