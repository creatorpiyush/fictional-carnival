const fs = require("fs");

fs.writeFile(__dirname + `/write.txt`, "Content of file", (err) => {
  if (err) throw err;
  console.log(`File Written`);
});

// todo: file with longer content
fs.writeFile(
  __dirname + "/sample.txt",
  `Hi there is the a method for reading and writing a file in JavaScript`,
  function (err) {
    if (err) {
      throw err;
    }
    console.log(`File Written`);
  }
);
