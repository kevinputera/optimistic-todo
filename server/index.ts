import { ApolloServer, gql } from "apollo-server";

import { resolvers } from "./resolvers";

const typeDefs = gql`
  type Todo {
    id: ID!
    content: String!
  }

  type Query {
    todos: [Todo!]!
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
