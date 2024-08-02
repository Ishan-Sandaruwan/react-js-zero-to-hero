// Exercise 1: Create a class component that accepts a name prop and displays a greeting message.
import React, { Component } from 'react'

export default class Ex1_Class extends Component {
  render() {
    return (
      <div>Hello , {this.props.name}</div>
    )
  }
}
