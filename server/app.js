const express = require("express");
const mongoose = require("mongoose");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const app = express();
const port = 4000;

const db = "mongodb://loran:Ra5vB6UVzgaw78v@ds123852.mlab.com:23852/gql-demo";
const connectToDb = async db => {
  try {
    await mongoose.connect(
      db,
      { useNewUrlParser: true }
    );
    console.log("Connected to database");
  } catch (error) {
    console.error(error);
  }
};

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(port, () => {
  connectToDb(db).then(() => console.log(`listening for requests on ${port}`));
});
