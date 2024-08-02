import React, { Component } from "react";

export default class Ex5_Class extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }
  render() {
    return <div>value = {this.state.value}</div>;
  }
}
