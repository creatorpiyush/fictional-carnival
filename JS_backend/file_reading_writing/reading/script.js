const fs = require(`fs`);

// * reading from different folder
fs.readFile("../writing/sample.txt", (err, data) => {
  if (err) throw err;

  console.log(data); // * output: content of file in buffer form

  console.log(data.toString()); // * output: content in string form
});

// * reading from same folder

fs.readFile(__dirname + `/write.txt`, (err, data) => {
  if (err) throw err;

  console.log(data);

  console.log(data.toString());
});
