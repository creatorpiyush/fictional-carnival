let array = [1, 2, 3];

console.log(array.join(`-`)); // * output: 1-2-3 => [1,2,3] is  joined together with "-"

console.log(array.slice(1, 3)); // * output: [2,3] => .slice(start_index , end_index)

console.log(array.slice(-1)); // * output: [3] => reverse order

array = [1, 2, 3, 4, 5, 6];

console.log(array.splice(3, 4)); // * deletes the value in specific index
console.log(array);

array.push(24); // * adding value at end
console.log(array);

array.pop(); // * deleting value from end
console.log(array);

array.shift();
console.log(array); // * removes value from starting

array.unshift(52);
console.log(array); // * adds at starting

array.unshift(55, 62, 78, 99); // * adding multiple value in starting
console.log(array);

console.log([1, 2] == [1, 2]); // * output: false => both are different arrays
