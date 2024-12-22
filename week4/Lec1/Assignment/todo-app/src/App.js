import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  handleAdd = (todo) => {
    // Use spread operator to create a new array and avoid mutating state
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo]
    }));
  };

  handleRemove = (text) => {
    // complete the function to remove the Todo from the list
    const {todos} = this.state;
    const todoIndex = todos.findIndex(todo => todo.text === text)
    if (todoIndex !== -1) {
      todos.splice(todoIndex, 1);
    }

    this.setState({
      todos
    })
  };
  render() {
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form handleAdd={this.handleAdd}/>
        <List todos={this.state.todos} 
              handleRemove={this.handleRemove}
              handleAdd = {this.handleAdd}
         />
      </div>
    );
  }
}
