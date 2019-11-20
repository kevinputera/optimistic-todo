import React from "react";

import { AddTodoForm } from "./components/AddTodoForm";
import { TodosList } from "./components/TodosList";

export const App: React.FC = () => {
  return (
    <div>
      <AddTodoForm />
      <TodosList />
    </div>
  );
};
