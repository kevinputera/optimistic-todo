import express from "express";
import { ApolloServer } from "apollo-server-express";

import { typeDefs, resolvers } from "./graphql";

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

app.use((req, res, next) => {
  setTimeout(() => next(), 1000);
});

server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`);
});
