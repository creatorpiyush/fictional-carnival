let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

/*
 * Promises remove/omit callback function and variables/parameters
 */

p.then((message) => {
  console.log(message);
}).catch((err) => {
  console.log(err);
});
