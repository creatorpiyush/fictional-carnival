class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  isadult() {
    return this.age >= 18;
  }
}

let p1 = new Person(`Piyush`, 20);
console.log(p1); // * output: returns class in from of object
console.log(p1.name);
console.log(p1.age);
