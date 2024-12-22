import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  // handleSubmit = () => {
  //   const { handleAdd } = this.props;
  //   const { text } = this.state;

  //   // Prevent adding empty todos
  //   if (text.trim()) {
  //     handleAdd({ text: text.trim() }); // Pass the trimmed text
  //     this.setState({ text: "" }); // Clear the input after adding the todo
  //   } else {
  //     alert("Todo cannot be empty!"); // Notify the user if the input is empty
  //   }
  // };

  render() {
    const {handleAdd} = this.props;
    console.log(handleAdd);
    return (
      <div className="form">
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Whats on your mind?"
          required
        />
        {/* Add onclick event on the button to add the todos */}
        <button onClick={()=> handleAdd({text: this.state.text})}>Add</button>
      </div>
    );
  }
}
