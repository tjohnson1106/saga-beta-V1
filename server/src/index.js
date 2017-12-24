/* eslint-disable no-console */
import express from "express";

import { createServer } from "http";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";

import "./config/db";
import constants from "./config/constants";
import middlewares from "./config/middlewares";
import mocks from "./mocks";

const app = express();

middlewares(app);

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: constants.GRAPHQL_PATH
  })
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.use(
  constants.GRAPHQL_PATH,
  graphqlExpress(req => ({
    schema,
    context: {
      user: req.user
    }
  }))
);

const graphQLServer = createServer(app);

// mocks().then(() => {
graphQLServer.listen(constants.PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${constants.PORT}`);
  }
});
// });
