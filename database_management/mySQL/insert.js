const mysql = require("mysql2");

const insert = {
  name: process.argv[2],
  age: parseInt(process.argv[3]),
  city: process.argv[4],
};

const connection = mysql.createConnection({
  host: "localhost",
  database: "sampledb",
  user: "sampleuser",
  password: "samplepass",
});

connection.query(
  `INSERT INTO sampletable (name, age, city) VALUES (?,?,?)`,
  [name, age, city],
  function (err, results) {
    if (err) {
      console.error(err);
    } else {
      console.log(results);
      console.log("Inserted successfully");
    }
    connection.close();
  }
);
