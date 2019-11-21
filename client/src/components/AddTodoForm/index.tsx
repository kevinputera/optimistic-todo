import React, { useState } from "react";

import {
  TODOS,
  TodosResult,
  TodosVariables,
  useAddTodoMutation
} from "../../lib/hooks";

export const AddTodoForm: React.FC = () => {
  const [content, setContent] = useState("");

  const [addTodo] = useAddTodoMutation({
    update: (cache, { data: mutationResult }) => {
      if (mutationResult) {
        const queryResult = cache.readQuery<TodosResult, TodosVariables>({
          query: TODOS
        });
        if (queryResult) {
          cache.writeQuery<TodosResult, TodosVariables>({
            query: TODOS,
            data: { todos: [...queryResult.todos, mutationResult.addTodo] }
          });
        }
      }
    },
    optimisticResponse: { addTodo: { __typename: "Todo", id: 100, content } }
  });

  return (
    <form>
      <label htmlFor="addTodoInput"></label>
      <input
        id="addTodoInput"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button
        type="submit"
        onClick={e => {
          e.preventDefault();
          addTodo({
            variables: { content }
          });
        }}
      >
        Add
      </button>
    </form>
  );
};
