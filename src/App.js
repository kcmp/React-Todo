import React, { Component } from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const currentList = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
    class: ""
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
    class: ""
  },
  {
    task: "Make Bed",
    id: 1528817077288,
    completed: false,
    class: ""
  }
];

class App extends Component {
  // Constructor
  constructor(props) {
    super();
    this.state = {
      taskItems: currentList,
      task: "",
      id: "",
      completed: "",
      inputValue: ""
    };
  }


render() {
  return(
    <div>
      <h2>Welcome to your Todo App!</h2>
      <TodoList list={this.state.currentList} />
    </div>
    );
  }
}

export default App;
