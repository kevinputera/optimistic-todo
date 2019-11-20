import { gql } from "apollo-server";

export const typeDefs = gql`
  type Todo {
    id: ID!
    content: String!
  }

  type Query {
    todos: [Todo!]!
  }
`;
