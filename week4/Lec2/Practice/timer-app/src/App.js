import React from "react";
import TimerOne from "./Components/Timer/TimerOne.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      mount: false
    }
  }

  handleMount = () => {
    this.setState((prevState) => {
      return {
        mount: !prevState.mount
      }
    })
  };

  render() {
    return (
      <>
        <button onClick ={this.handleMount}>{this.state.mount ? "Stop": "Start"}</button>
        {<TimerOne mount={this.state.mount}/>}
      </>
    );
  }
}

export default App;
