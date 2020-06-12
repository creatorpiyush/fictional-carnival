// * constructing a object

let obj = {
  a: 10,
  b: 20,
  c: {
    p: 1,
    q: 2,
    r: {
      x: `Piyush`,
      y: "Anand",
    },
  },
  d: `hi`,
};

console.log(obj); // * output: full object

console.log(obj.a); // * output: 10

console.log(obj.c); // * output: "output of object c"

console.log(obj.c.p); // * output: 1

console.log(obj.c.r); // * output: "output of object r"

console.log(obj.c.r.x); // * output: Piyush

// todo: creating a object from object

let obj2 = Object.create(obj);

console.log(obj2); // * output: empty object

console.log(obj.a); // * output: 10 => same as "obj" from which it is created

console.log(obj.c.q);

console.log(obj.c.r.y);

// *

// * LHS             RHS
// * {}              {}
// * empty block     object

let a = {} + []
console.log(a);

console.log([] + {});
