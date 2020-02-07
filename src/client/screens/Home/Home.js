import React, { Component } from 'react';
//import { Route, Link} from 'react-router-dom';

export default class Home extends Component {

  componentDidMount() {
  }

  routeScheduleSetup = () => {
    this.props.history.push('/schedule-setup1');
  }

  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <p>Time of the day placeholder</p>
        <h1>Welcome back, <br/>Ryan</h1>
        <button onClick={this.routeScheduleSetup}>Continue</button>
      </div>
    );
  }
}
