import React, { Component } from "react";

export default class Ex3_Class extends Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }
  render() {
    return (
      <div>
        {this.state.isOn && <p>isljd alskdjfhn alskjdfh nalksjd fnalksjdf n</p>}
        <button onClick={this.handleClick}>
          {this.state.isOn ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}
