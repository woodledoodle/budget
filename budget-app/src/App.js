import React, { Component } from "react";
import { Link, Router, Switch } from 'react-router-dom';
import Posts from './Post';
import Home from './Home'
// import ApiCalendar from 'react-google-calendar-api';
// import ApiCalendar from 'react-google-calendar-api/ApiCalendar';
import Balance from './components/Balance/Balance'
import Deposit from './components/Deposit/Deposit'
import Withdraw from './components/Withdraw/Withdraw'
import Debt from './components/Debt/Debt'
import Logs from './components/Logs/Logs'

// define our App component this is our component definition
class App extends Component {
  // what should the component render
  render() {
    // Make sure to return some UI
    return (
     
      <div>
        <Home/>
        <Balance/>
        <Deposit/>
        <Withdraw/>
        <Debt/>
        <Posts/>
        <Logs/>
      </div>
      
    
    )}
}

export default App;
