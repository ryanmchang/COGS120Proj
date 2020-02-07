import React, { Component } from 'react';
//import { Route, Link} from 'react-router-dom';

export default class Home extends Component {

  componentDidMount() {
  }

  routeScheduleSetup = () => {
    this.props.history.push('/schedule-setup');
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.routeScheduleSetup}>Continue</button>
      </div>
    );
  }
}
