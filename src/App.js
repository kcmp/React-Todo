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

  // Methods
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addItem = event => {
    event.preventDefault();
    this.setState({
      taskItems: [
        ...this.state.taskItems,
        {
          task: this.state.inputValue,
          id: Date.now(),
          completed: false,
          class: ""
        }
      ],
      inputValue: ""
    });
  };

//render
render() {
  return(
    <div>
      <h2>Welcome to your Todo App!</h2>
      <TodoList
          list={this.state.taskItems}
          
        />
        <TodoForm
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          addItem={this.addItem}
          
        />
    </div>
    );
  }
}

export default App;
