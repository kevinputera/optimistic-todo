import { Todo } from "./Todo";

export class TodoStore {
  private id: number;
  private todos: Todo[];

  constructor(seed: Todo[]) {
    this.id = 1;
    this.todos = seed;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(content: string) {
    const newTodo: Todo = {
      id: this.id++,
      content
    };
    this.todos = [...this.todos, newTodo];
    return newTodo;
  }
}
