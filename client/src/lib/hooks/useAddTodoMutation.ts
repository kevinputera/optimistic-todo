import { gql } from "apollo-boost";
import { useMutation, MutationHookOptions } from "@apollo/react-hooks";

import { Todo } from "../../typings";

export const ADD_TODO = gql`
  mutation addTodo($content: String!) {
    addTodo(content: $content) {
      __typename
      id
      content
    }
  }
`;

export interface AddTodoResult {
  addTodo: Todo;
}

export interface AddTodoVariables {
  content: string;
}

export const useAddTodoMutation = (
  options?: MutationHookOptions<AddTodoResult, AddTodoVariables>
) => {
  return useMutation<AddTodoResult, AddTodoVariables>(ADD_TODO, options);
};
