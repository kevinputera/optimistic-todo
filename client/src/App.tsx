import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { Todo, TodoProps } from "./components/Todo";

import "./App.css";

const GET_TODOS = gql`
  query getTodos {
    todos {
      id
      content
    }
  }
`;

interface GetTodosResult {
  todos: TodoProps[];
}

export const App: React.FC = () => {
  const { data, loading, error } = useQuery<GetTodosResult>(GET_TODOS);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error {JSON.stringify(error, null, 2)}</p>;
  }

  if (!data) {
    return <p>No data</p>;
  }

  return (
    <div className="App">
      {data.todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};
