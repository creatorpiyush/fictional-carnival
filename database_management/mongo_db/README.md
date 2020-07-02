## MongoDB

### Setup in node

```shell
$ npm install mongodb
```

## Connection in JavaScript

```javascript
const mongodb = require("mongodb");
const mongoclient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/sample";

Mongoclient.connect(url, (err, db) => {
    if(err) console.log(err);
    else{
        console.log(`Database Connected at ${url}`)
    }
}
```
