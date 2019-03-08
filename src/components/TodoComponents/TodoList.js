// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import "./Todo.css";

import ToDo from "./Todo";

const TodoList = props => {
    return (
        <ul>
            {props.list.map((i, index) => (
            <ToDo item={i} key={index} />
            ))}
        </ul>
    );
}

export default TodoList;