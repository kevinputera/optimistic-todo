import { GraphQLFieldResolver } from "graphql";

import { getStore } from "../../store";

const addTodo: GraphQLFieldResolver<any, {}, { content: string }> = (
  _source,
  { content }
) => {
  const store = getStore();
  return store.addTodo(content);
};

export const Mutation = { addTodo };
