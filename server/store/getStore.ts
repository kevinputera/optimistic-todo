import { TodoStore } from "./TodoStore";
import { Todo } from "./Todo";

let store: TodoStore;

// Create a singleton store todo store
export const getStore = (seed: Todo[] = []) => {
  if (store) {
    return store;
  }

  store = new TodoStore(seed);
  return store;
};
