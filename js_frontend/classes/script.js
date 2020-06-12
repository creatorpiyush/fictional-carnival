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

console.log(p1.__proto__ == Person.prototype); // * true
console.log(p1.__proto__.__proto__ == Object.prototype); // * true

// * extending classes

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // * super() => used every time is a class is extended -> used to call constructor of previous class
    this.grade = grade;
  }
}

let s1 = new Student(`Piyush`, 20, 100);
console.log(s1);
console.log(s1.name);
console.log(s1.age);
console.log(s1.grade);

console.log(s1.__proto__ == Student.prototype);
console.log(s1.__proto__.__proto__ == Person.prototype);
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype);

/*
 * inheritance chain is only in Object.prototype -> Person.prototype -> Student.prototype
 * no inheritance between the class (actually they are functions)
 * Object -X-> Person -X-> Student
 */
