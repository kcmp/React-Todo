import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <form onSubmit={props.addItemHandler}>
      <input
        type="text"
        name="inputValue"
        placeholder="Add new item to the list here"
        value={props.inputValue}
        onChange={props.handleChange}
      />
      <button className="submit">Add to List</button>
      <button className="remove" onClick={props.removeCompleted}>
        Remove Completed Tasks
      </button>
    </form>
  );
};

export default TodoForm;
