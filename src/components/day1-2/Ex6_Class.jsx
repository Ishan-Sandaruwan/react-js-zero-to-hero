// Exercise 6: Implement a timer component that starts when the component mounts and stops when it unmounts.

import React, { Component } from "react";

export default class Ex6_Class extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("unmounted");
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
