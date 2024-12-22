import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    // console.log(this.props);
    const {todos, handleAdd, handleRemove} = this.props;
    console.log(todos);
    return (
      <div className="list">

        {todos.map((todo, index)=>
            <Todo todo={todo} 
                  key={index} 
                  handleAdd={handleAdd}
                  handleRemove={handleRemove}
            />
          
        )}

      </div>
    );
  }
}
