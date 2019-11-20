import { getStore } from "../store";

export const resolvers = {
  Query: {
    todos: () => getStore().getTodos()
  }
};
