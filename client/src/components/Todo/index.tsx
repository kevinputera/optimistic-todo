import React from "react";

import "./Todo.css";

export interface TodoProps {
  readonly id: number;
  readonly content: string;
}

export const Todo: React.FC<TodoProps> = ({ id, content }) => {
  return (
    <div className="Todo">
      <div className="Todo__id">{id}</div>
      <div className="Todo__content">{content}</div>
    </div>
  );
};
