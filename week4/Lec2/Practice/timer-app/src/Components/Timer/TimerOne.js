import React from "react";

export default class TimerOne extends React.Component {
  constructor() {
    super();

    this.state = {
      time: 0,
    };

    this.timer = null;
  }

  componentDidMount() {
    console.log("Timer ComponentDidMount");
    console.log("_________________________________");
    // this.startTimer();
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    console.log("Timer ComponentDidUpdate");
    console.log("_________________________________");

    if (prevProps.mount !== this.props.mount) {
      // console.log("inside");
      if (this.props.mount) {
        // console.log("indside");
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }
  }

  componentWillUnmount() {
    console.log("Timer componentWillUnmount");
    this.stopTimer();
  }

  startTimer() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.setState((prevState) => ({ time: prevState.time + 1 }));
      }, 1000);
    }
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  render() {
    const formattedTime = new Date(this.state.time * 1000)
      .toISOString()
      .slice(11, 19);

    return (
      <div>
        <h2>Time Spent: {this.state.time}</h2>
        <h3>Formatted Time: {formattedTime}</h3>
      </div>
    );
  }
}
