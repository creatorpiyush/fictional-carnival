## Sequelize

> It is used to create / convert javascript classes & objects to SQL commands (table form)

> Known as ORM => Object Relation Mapper

```node
npm init
npm install express sequelize
npm install nysql2 | sqlite3
```

### Connecting to Database

```javascript
const Sequelize = require("sequelize");

> for MySQL
const db = new Sequelize({
  dialect: "mysql",
  database: 'sampledb',
  username: 'sampleuser',
  password: 'samplepass'
});

> for SQLite
const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname+'/tasks.db'
})

const Datatype = Sequelize.DataTypes

> test command for connection checking[not required in program just for testing whether db is connected or not]
db.authenticate()
  .then(() => {
    console.log("Connection Worked");
  })
  .catch((err) => {
    console.error(err);
  });

```
