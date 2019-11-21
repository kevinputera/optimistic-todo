import { gql } from "apollo-boost";
import { useQuery, QueryHookOptions } from "@apollo/react-hooks";

import { Todo } from "../../typings";

export const TODOS = gql`
  query todos {
    todos {
      __typename
      id
      content
    }
  }
`;

export interface TodosResult {
  todos: Todo[];
}

export interface TodosVariables {}

export const useTodosQuery = (
  options?: QueryHookOptions<TodosResult, TodosVariables>
) => {
  return useQuery<TodosResult, TodosVariables>(TODOS, options);
};
