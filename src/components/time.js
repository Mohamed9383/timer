import React, { Component } from "react";
export default class date extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0
    };
  }
  getSeconds = () => {
    return ("0" + (this.state.seconds % 60)).slice(-2);
  };
  getMinutes = () => {
    return ("0" + Math.floor((this.state.seconds % 3600) / 60)).slice(-2);
  };
  getHours = () => {
    return ("0" + Math.floor(this.state.seconds / 3600)).slice(-2);
  };
  handleTime = () => {
    setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1
      });
    }, 1000);
  };
  resetTime = () => {
    this.setState({
      seconds: 0,
    });
  };
  render() {
    return (
      <div className="Timer">
        <h1>Timer</h1>
        <h1>
          {this.getSeconds()} : {this.getMinutes()} : {this.getHours()}
        </h1>

        {<button onClick={this.handleTime}>Start</button>}
        {<button onClick={this.resetTime}>Reset</button>}
      </div>
    );
  }
}
