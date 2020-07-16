## Database setup for mySQL

```shell
$ sudo mysql -u root -p
```

```sql
mysql> create database sampledb;

mysql> create user sampleuser identified with mysql_native_password by 'samplepass';

mysql> grant all privileges on sampledb.* to sampleuser;

mysql> flush privileges;

```

### Reading / Accessing the created Database

```shell
$ sudo mysql -u sampledb -p
```

```sql
mysql> use sampledb;

mysql> show tables;
```

## Setting-Up in our Project

```shell
$ npm init
$ npm install express mysql2
```

### in db.js file

```javascript
const mysql = require("mysql2");

const connection = mysql.createConnection({
  dialect: "mysql",
  host: "localhost",
  database: "sampledb",
  user: "sampleuser",
  password: "samplepass",
});
```

```javascript
connection.query(
  `create Table if Not exists sampletable(
        id integer Auto_Increment key,
        name Varchar (50) Not NULL,
        city Varchar (30),
        age Integer Not NULL
    )`,

  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Table created");
    }
    connection.close();
  }
);
```
