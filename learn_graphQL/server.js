const express = require("express");
const expressGraphQL = require("express-graphql");
const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
  })
);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
