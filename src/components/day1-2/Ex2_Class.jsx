// Exercise 2: Create a counter component using state in a class component.

import React, { Component } from "react";

export default class Ex2_Class extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}
