import { GraphQLFieldResolver } from "graphql";

import { getStore } from "../../store";

const todos: GraphQLFieldResolver<any, {}> = () => {
  const store = getStore();
  return store.getTodos();
};

export const Query = { todos };
