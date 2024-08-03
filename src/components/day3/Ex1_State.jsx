import React, { Component } from 'react'

export default class Ex1_State extends Component {
    constructor(props){
        super(props);
        this.state = {date:new Date()};
        this.tik = this.tik.bind(this);
    }
    componentDidMount(){
        this.timeId = setInterval(this.tik,1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeId);
    }
    tik(){
        this.setState({date:new Date()});
    }
  render() {
    return (
      <div>{this.state.date.toLocaleTimeString()}</div>
    )
  }
}