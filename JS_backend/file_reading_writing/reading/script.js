const fs = require(`fs`);

fs.readFile("../writing/sample.txt", (err, data) => {
  if (err) throw err;

  console.log(data); // * output: content of file in buffer form

  console.log(data.toString()); // * output: content in string form
});
