import React from "react";

import { useTodosQuery } from "../../hooks";
import { Todo } from "./Todo";

export const TodosList: React.FC = () => {
  const { data, loading, error } = useTodosQuery();

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  if (!data) {
    return <p>No data</p>;
  }

  return (
    <div>
      {data.todos.map(todo => (
        <Todo key={todo.id} {...todo}></Todo>
      ))}
    </div>
  );
};
