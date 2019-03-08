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
      inputValue: ""
    };
  }

  // Methods
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});}

  

    addItemHandler = event => {
      event.preventDefault();
      this.setState(prevState => {
        return {
          taskItems: [
            ...prevState.taskItems,
            {
              completed: false,
              id: Date.now(),
              task: prevState.inputValue
            }
          ],
          inputValue: ""
        };
      });
    };

    markComplete = taskId => {
      this.setState(prevState => {
        return {
          taskItems: prevState.taskItems.map(i => {
            if (i.id === taskId) {
              return {
                task: i.task,
                id: i.id,
                completed: !i.completed
              };
            } else {
              return i;
            }
          })
        };
      });
    };
  
    removeCompleted = () => {
      this.setState({
        taskItems: this.state.taskItems.filter(i => i.completed === false)
      });
    };

//render
render() {
  return (
    <div className="container">
      <h2>Welcome to the Todo App!</h2>
      <TodoList
        list={this.state.taskItems}
        markComplete={this.markComplete}
      />
      <TodoForm
        handleChange={this.handleChange}
        inputValue={this.state.inputValue}
        addItemHandler={this.addItemHandler}
        removeCompleted={this.removeCompleted}
      />
    </div>
  );
}
}

export default App;