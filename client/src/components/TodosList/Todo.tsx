import React from "react";

import { Todo as TodoEntity } from "../../typings";

export const Todo: React.FC<TodoEntity> = ({ id, content }) => {
  return (
    <div className="Todo">
      <span className="Todo__id">{id}</span>{" "}
      <span className="Todo__content">{content}</span>
    </div>
  );
};
