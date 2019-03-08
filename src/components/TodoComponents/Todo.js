import React from "react";
import "./Todo.css";

const Todo = props => {
  let completed = props.item.completed ? "complete" : "";
  return (
    <p
      onClick={() => props.markComplete(props.item.id)}
      key={props.item.id}
      className={`task ${completed}`}
    >
      {props.item.task}
    </p>
  );
};

export default Todo;
