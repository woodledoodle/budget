import React, { Component } from "react";
import Balance from './components/Balance/Balance'
import Deposit from './components/Deposit/Deposit'
import Withdraw from './components/Withdraw/Withdraw'

// define our Hello component this is our component definition
class Hello extends Component {
  // what should the component render
  render() {
    // Make sure to return some UI
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You are {this.props.age} years old</p>
        <Deposit/>
        <Balance/>
      </div>
    );
  }
}

export default Hello;
