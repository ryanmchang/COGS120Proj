import React, { Component } from 'react';
//import { Route, Link} from 'react-router-dom';
import data from "../../data.json";


export default class Home extends Component {

  componentDidMount() {
    console.log(data);
  }

  routeScheduleSetup = () => {
    this.props.history.push('/schedule-setup1');
  }

  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <p>Time of the day placeholder</p>
        <h1>Welcome back, <br/> {data.user.name}</h1>
        <button onClick={this.routeScheduleSetup}>Continue</button>
      </div>
    );
  }
}
